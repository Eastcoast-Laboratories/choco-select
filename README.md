# Choco-Select 🍫

Ein Ninite.com-Klon für den Chocolatey-Paketmanager. Wählen Sie Ihre bevorzugten Windows-Anwendungen aus und generieren Sie einen einzigen Chocolatey-Installationsbefehl.

\![Choco-Select](https://img.shields.io/badge/Status-Active-success)
\![License](https://img.shields.io/badge/License-MIT-blue)

## Was ist Choco-Select?

Choco-Select ist eine Webanwendung, die es Ihnen ermöglicht, aus über 100 beliebten Windows-Anwendungen auszuwählen und automatisch einen Chocolatey-Installationsbefehl zu generieren. Ähnlich wie Ninite.com, aber für Chocolatey - den leistungsstarken Paketmanager für Windows.

### Hauptfunktionen

- 🎯 **Einfache Auswahl**: Durchsuchen und wählen Sie aus über 100 beliebten Windows-Anwendungen
- 📦 **Organisierte Kategorien**: Anwendungen nach Kategorien gruppiert (Browser, Entwicklertools, Medien, etc.)
- 🔄 **Ein-Klick-Installation**: Generieren Sie einen einzigen Chocolatey-Befehl für alle ausgewählten Apps
- 📋 **In Zwischenablage kopieren**: Kopieren Sie den generierten Befehl einfach
- 🎨 **Moderne Benutzeroberfläche**: Sauberes, responsives Interface mit Material-UI
- 🚀 **Schnell & Leichtgewichtig**: Gebaut mit React und TypeScript

## Installation und Start

### Voraussetzungen

- Node.js (Version 14 oder höher) - [Download hier](https://nodejs.org/)
- npm (wird automatisch mit Node.js installiert)

### Schritt-für-Schritt Anleitung

1. **Repository klonen**
   ```bash
   git clone git@github.com:Eastcoast-Laboratories/choco-select.git
   cd choco-select
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm start
   ```

4. **Fertig\!** Die Anwendung öffnet sich automatisch im Browser unter [http://localhost:3000](http://localhost:3000)

## Benutzung

1. **Anwendungen durchsuchen**: Navigieren Sie durch verschiedene Kategorien oder sehen Sie alle Anwendungen an
2. **Apps auswählen**: Klicken Sie auf die Anwendungen, die Sie installieren möchten
3. **Befehl generieren**: Der Chocolatey-Installationsbefehl wird automatisch generiert
4. **Kopieren & Ausführen**: Kopieren Sie den Befehl und führen Sie ihn in einer erhöhten PowerShell/Eingabeaufforderung aus

### Beispiel für einen generierten Befehl

```bash
choco install googlechrome firefox vscode git 7zip vlc -y
```

## Chocolatey installieren

Falls Sie Chocolatey noch nicht installiert haben, besuchen Sie [chocolatey.org/install](https://chocolatey.org/install) für Installationsanweisungen.

Schnellinstallation (in erhöhter PowerShell ausführen):

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Verfügbare Kategorien

- **Web Browsers**: Chrome, Firefox, Edge, Opera, Brave
- **Messaging**: Zoom, Discord, Teams, Thunderbird
- **Media**: VLC, Spotify, iTunes, Audacity, HandBrake
- **Imaging**: GIMP, Inkscape, Blender, Paint.NET, Krita
- **Documents**: LibreOffice, Foxit Reader, SumatraPDF
- **Security**: Malwarebytes, Avast, AVG
- **Developer Tools**: VS Code, Git, Python, Notepad++, PuTTY
- **Utilities**: 7-Zip, CCleaner, TeamViewer, AnyDesk
- **Und viele mehr...**

## Für Produktion bauen

```bash
npm run build
```

Dies erstellt einen optimierten Produktions-Build im `build`-Ordner.

## Technologie-Stack

- **React** - UI Framework
- **TypeScript** - Typsicherheit
- **Material-UI** - Komponentenbibliothek
- **Create React App** - Build-Tooling

## Mitwirken

Beiträge sind willkommen\! Bitte erstellen Sie gerne einen Pull Request.

1. Repository forken
2. Feature-Branch erstellen (`git checkout -b feature/NeuesFeature`)
3. Änderungen committen (`git commit -m 'Füge neues Feature hinzu'`)
4. Branch pushen (`git push origin feature/NeuesFeature`)
5. Pull Request öffnen

## Roadmap

- [ ] Suchfunktion hinzufügen
- [ ] Paketbeschreibungen und Versionsinformationen
- [ ] Dark Mode Unterstützung
- [ ] Auswahl-Profile speichern/laden
- [ ] Export in Skriptdatei
- [ ] Weitere Pakete hinzufügen
- [ ] Echte Paket-Icons

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die LICENSE-Datei für Details.

## Danksagungen

- Inspiriert von [Ninite.com](https://ninite.com)
- Powered by [Chocolatey](https://chocolatey.org)
- Gebaut mit [Material-UI](https://mui.com)

## Support

Wenn Sie dieses Projekt hilfreich finden, geben Sie ihm bitte einen ⭐️\!

Für Probleme und Feature-Anfragen nutzen Sie bitte die [GitHub Issues](https://github.com/Eastcoast-Laboratories/choco-select/issues) Seite.

---

Made with ❤️ by Eastcoast Laboratories
