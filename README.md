# 📅 Next Event Timer - GNOME Shell Extension

A sleek and lightweight GNOME Shell extension that displays your next scheduled event from the Evolution Calendar directly in the top panel, complete with a live countdown timer.

Built and tested for **GNOME 46** (perfect for distros like **Zorin OS 18**, Ubuntu 24.04, or Fedora 40).

## ✨ Features

* **Live Countdown:** Shows exactly how much time is left until your next event starts (e.g., `in 2h 15m`).
* **Ongoing Event Tracking:** If an event is currently happening, the indicator updates to show how much time is left until it ends.
* **Native Integration:** Connects directly to GNOME's internal `CalendarServer` (Evolution Data Server) – no third-party logins or APIs required.
* **Customizable Position:** Includes a built-in Preferences menu (using modern Adwaita UI) that allows you to move the indicator to the Left, Center, or Right side of the top panel.
* **Resource Friendly:** The timer updates efficiently every 30 seconds without draining battery or CPU.

## 📸 Screenshots



## ⚙️ Requirements

* **GNOME Shell 46** (Uses the modern ESM import architecture).
* **Evolution Calendar** (Your GNOME system calendar must have at least one synced account or local event).

## 🚀 Manual Installation

Since this extension is fresh out of the oven, you can install it easily from the source code:

1. **Clone the repository** into your local GNOME extensions directory:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/next-event-gnome-extension.git](https://github.com/YOUR-USERNAME/next-event-gnome-extension.git) ~/.local/share/gnome-shell/extensions/next-event@YOUR-USERNAME.github.com
