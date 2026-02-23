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

<div align="center">

  <h3><b>Extension Preview on the Windows-like variant on Zorin OS 18</b></h3>
  <img src="https://github.com/user-attachments/assets/de632ac6-47cf-4995-a4e5-07fc5d70c691" />
  <br><br><br>

  <h3><b>Extension (Time Left) Showcase</b></h3>
  <br><br><br>
  <img src="https://github.com/user-attachments/assets/f23c0b49-3c43-4bca-9b51-c3d387282765" />
  <br><br><br>

  <h3><b>Extension Settings Panel (Center option)</b></h3>
  <br><br><br>
  <img src="https://github.com/user-attachments/assets/92310f88-0058-41fc-b352-974ce709e7d6" />
  <br><br><br>

  <h3><b>Extension Settings Panel (Left option)</b></h3>
  <br><br><br>
  <img src="https://github.com/user-attachments/assets/0146fde7-dd38-4422-a7c5-49e264952da1" />
  <br><br><br>

  <h3><b>Extension Settings Panel (Right option)</b></h3>
  <br><br><br>
  <img src="https://github.com/user-attachments/assets/43824b4c-4562-4f0f-95d0-db2d180d2dc9" />

</div>
## ⚙️ Requirements

* **GNOME Shell 46** (Uses the modern ESM import architecture).
* **Evolution Calendar** (Your GNOME system calendar must have at least one synced account or local event).

## 🚀 Manual Installation

Since this extension is fresh out of the oven, you can install it easily from the source code:

1. **Clone the repository** into your local GNOME extensions directory:
   ```bash
   git clone https://github.com/LivDevGit/next-event-gnome-extension.git ~/.local/share/gnome-shell/extensions/next-event@LivDevGit.github.com
