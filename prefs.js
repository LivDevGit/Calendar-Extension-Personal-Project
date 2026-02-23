/**
 * Next Event Timer - Preferences
 */

import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class NextEventPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        // Conectăm fereastra la schema pe care am creat-o la Pasul 1
        const settings = this.getSettings('org.gnome.shell.extensions.next-event');

        // Creăm o pagină și un grup de setări (stilul modern GNOME)
        const page = new Adw.PreferencesPage();
        const group = new Adw.PreferencesGroup({ title: 'Appearance Settings' });

        // Creăm un meniu derulant (Dropdown) pentru poziție
        const positionRow = new Adw.ComboRow({
            title: 'Panel Position',
            subtitle: 'Choose where the timer appears in the top bar.',
            model: Gtk.StringList.new(['Left', 'Center (near clock)', 'Right'])
        });

        // Legăm meniul de setarea noastră din baza de date
        // 0 = Left, 1 = Center, 2 = Right
        settings.bind(
            'panel-position', 
            positionRow, 
            'selected', 
            Gio.SettingsBindFlags.DEFAULT
        );

        // Adăugăm elementele în fereastră
        group.add(positionRow);
        page.add(group);
        window.add(page);
    }
}
