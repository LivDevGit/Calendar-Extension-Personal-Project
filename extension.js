/**
 * Next Event Timer - GNOME Shell Extension
 */

import St from 'gi://St';
import Clutter from 'gi://Clutter';
import GObject from 'gi://GObject';
import GLib from 'gi://GLib';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as Calendar from 'resource:///org/gnome/shell/ui/calendar.js';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

const NextEventButton = GObject.registerClass(
    class NextEventButton extends PanelMenu.Button {
        _init() {
            super._init(0.0, 'Next Event Timer');
            this.buttonText = new St.Label({
                text: '📅 Loading...',
                y_align: Clutter.ActorAlign.CENTER
            });
            this.add_child(this.buttonText);
        }

        setLabelText(text) {
            this.buttonText.set_text(text);
        }
    }
);

export default class NextEventExtension extends Extension {
    enable() {
        console.log('[Next Event] Extension is enabling...');
        
        this._settings = this.getSettings('org.gnome.shell.extensions.next-event');
        
        this._settingsChangedId = this._settings.connect(
            'changed::panel-position', 
            this._repositionIndicator.bind(this)
        );

        this._eventSource = new Calendar.DBusEventSource();
        this._changedId = this._eventSource.connect('changed', this._updateEvents.bind(this));

        this._createAndAddIndicator();

        this._startTimer();
        this._requestEvents();
        this._updateEvents();
    }

    _createAndAddIndicator() {
        this._indicator = new NextEventButton();
        
        let positions = ['left', 'center', 'right'];
        let savedPositionIndex = this._settings.get_int('panel-position');
        let boxPosition = positions[savedPositionIndex] || 'center';

        Main.panel.addToStatusArea(this.uuid, this._indicator, 1, boxPosition);
        
        this._updateTimerUI();
    }

    _repositionIndicator() {
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
        this._createAndAddIndicator();
    }

    _requestEvents() {
        let now = new Date();
        let nextWeek = new Date();
        nextWeek.setDate(now.getDate() + 7);
        this._eventSource.requestRange(now, nextWeek);
    }

    _formatTimeLeft(diffMs) {
        let diffMins = Math.floor(diffMs / 60000);
        let days = Math.floor(diffMins / (24 * 60));
        let hours = Math.floor((diffMins % (24 * 60)) / 60);
        let mins = diffMins % 60;

        if (days > 0) { return `${days}d ${hours}h`; } 
        else if (hours > 0) { return `${hours}h ${mins}m`; } 
        else { return `${mins}m`; }
    }

    _formatTime(dateObj) {
        let hours = dateObj.getHours().toString().padStart(2, '0');
        let mins = dateObj.getMinutes().toString().padStart(2, '0');
        return `${hours}:${mins}`;
    }

    _updateTimerUI() {
        if (!this._indicator) return;

        if (!this._currentEvent) {
            this._indicator.setLabelText('📅 No upcoming events');
            return;
        }

        let now = new Date();
        let start = this._currentEvent.date;
        let end = this._currentEvent.end;
        let summary = this._currentEvent.summary;

        if (now >= start && now < end) {
            let timeLeft = this._formatTimeLeft(end - now);
            this._indicator.setLabelText(`⏳ Ongoing: ${summary} (${timeLeft} left)`);
        } else if (now < start) {
            let timeLeft = this._formatTimeLeft(start - now);
            let timeString = this._formatTime(start);
            this._indicator.setLabelText(`📅 ${summary} at ${timeString} (in ${timeLeft})`);
        } else {
            this._updateEvents();
        }
    }

    _updateEvents() {
        let now = new Date();
        let nextWeek = new Date();
        nextWeek.setDate(now.getDate() + 7);

        let events = this._eventSource.getEvents(now, nextWeek);

        if (events && events.length > 0) {
            events.sort((a, b) => a.date - b.date);
            let nextEvent = null;
            for (let e of events) {
                if (e.end > now) {
                    nextEvent = e;
                    break;
                }
            }
            this._currentEvent = nextEvent;
        } else {
            this._currentEvent = null;
        }

        this._updateTimerUI();
    }

    _startTimer() {
        this._timeoutId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 30, () => {
            this._updateTimerUI();
            return GLib.SOURCE_CONTINUE;
        });
    }

    disable() {
        console.log('[Next Event] Extension is disabling...');
        
        if (this._timeoutId) {
            GLib.source_remove(this._timeoutId);
            this._timeoutId = null;
        }

        if (this._settingsChangedId && this._settings) {
            this._settings.disconnect(this._settingsChangedId);
            this._settingsChangedId = null;
        }
        this._settings = null;

        if (this._changedId && this._eventSource) {
            this._eventSource.disconnect(this._changedId);
            this._changedId = null;
        }
        
        if (this._eventSource) {
            if (typeof this._eventSource.destroy === 'function') {
                this._eventSource.destroy();
            }
            this._eventSource = null;
        }

        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
    }
}
