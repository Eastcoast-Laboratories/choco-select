# Choco-Select 🍫

A Ninite.com clone for Chocolatey package manager. Select your favorite Windows applications and generate a single Chocolatey installation command.

\![Choco-Select](https://img.shields.io/badge/Status-Active-success)
\![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- 🎯 **Easy Selection**: Browse and select from 100+ popular Windows applications
- 📦 **Organized Categories**: Applications grouped by category (Browsers, Developer Tools, Media, etc.)
- 🔄 **One-Click Install**: Generate a single Chocolatey command to install all selected apps
- 📋 **Copy to Clipboard**: Easily copy the generated command
- 🎨 **Modern UI**: Clean, responsive interface built with Material-UI
- 🚀 **Fast & Lightweight**: Built with React and TypeScript

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:Eastcoast-Laboratories/choco-select.git

# Navigate to project directory
cd choco-select

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Usage

1. **Browse Applications**: Navigate through different categories or view all applications
2. **Select Apps**: Click on the applications you want to install
3. **Generate Command**: The Chocolatey installation command is automatically generated
4. **Copy & Run**: Copy the command and run it in an elevated PowerShell/Command Prompt

### Example Generated Command

```bash
choco install googlechrome firefox vscode git 7zip vlc -y
```

## Installing Chocolatey

If you don't have Chocolatey installed yet, visit [chocolatey.org/install](https://chocolatey.org/install) for installation instructions.

Quick install (run in elevated PowerShell):

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Available Categories

- **Web Browsers**: Chrome, Firefox, Edge, Opera, Brave
- **Messaging**: Zoom, Discord, Teams, Thunderbird
- **Media**: VLC, Spotify, iTunes, Audacity, HandBrake
- **Imaging**: GIMP, Inkscape, Blender, Paint.NET, Krita
- **Documents**: LibreOffice, Foxit Reader, SumatraPDF
- **Security**: Malwarebytes, Avast, AVG
- **Developer Tools**: VS Code, Git, Python, Notepad++, PuTTY
- **Utilities**: 7-Zip, CCleaner, TeamViewer, AnyDesk
- **And many more...**

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Material-UI** - Component library
- **Create React App** - Build tooling

## Contributing

Contributions are welcome\! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Add search functionality
- [ ] Add package descriptions and version info
- [ ] Dark mode support
- [ ] Save/load selection profiles
- [ ] Export to script file
- [ ] Add more packages
- [ ] Real package icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by [Ninite.com](https://ninite.com)
- Powered by [Chocolatey](https://chocolatey.org)
- Built with [Material-UI](https://mui.com)

## Support

If you find this project helpful, please give it a ⭐️\!

For issues and feature requests, please use the [GitHub Issues](https://github.com/Eastcoast-Laboratories/choco-select/issues) page.

---

Made with ❤️ by Eastcoast Laboratories
