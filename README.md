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
Extension Preview on the GNOME Shell-like variant on Zorin OS 18:
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 10-08-02" src="https://github.com/user-attachments/assets/cf1a4b47-2737-43fb-b5b8-4038c6ca9d9a" />

Extension Preview on the Windows-like variant on Zorin OS 18:
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 10-08-35" src="https://github.com/user-attachments/assets/de632ac6-47cf-4995-a4e5-07fc5d70c691" />

Extension Settings Panel (Center (near clock) option):
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 10-09-16" src="https://github.com/user-attachments/assets/92310f88-0058-41fc-b352-974ce709e7d6" />

Extension Settings Panel (Left option):
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 10-09-24" src="https://github.com/user-attachments/assets/0146fde7-dd38-4422-a7c5-49e264952da1" />

Extension Settings Panel (Right option):
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 10-09-30" src="https://github.com/user-attachments/assets/43824b4c-4562-4f0f-95d0-db2d180d2dc9" />

Extension ( Time Left ) Showcase:
<img width="2880" height="1800" alt="Screenshot from 2026-02-23 11-00-53" src="https://github.com/user-attachments/assets/f23c0b49-3c43-4bca-9b51-c3d387282765" />

## ⚙️ Requirements

* **GNOME Shell 46** (Uses the modern ESM import architecture).
* **Evolution Calendar** (Your GNOME system calendar must have at least one synced account or local event).

## 🚀 Manual Installation

Since this extension is fresh out of the oven, you can install it easily from the source code:

1. **Clone the repository** into your local GNOME extensions directory:
   ```bash
   git clone https://github.com/LivDevGit/next-event-gnome-extension.git ~/.local/share/gnome-shell/extensions/next-event@LivDevGit.github.com
