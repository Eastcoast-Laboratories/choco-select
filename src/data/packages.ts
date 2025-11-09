export interface Package {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  chocoPackage: string;
}

export const packages: Package[] = [
  // Web Browsers
  { id: 'chrome', name: 'Chrome', description: 'Fast Browser by Google', category: 'Web Browsers', icon: 'chrome', chocoPackage: 'googlechrome' },
  { id: 'opera', name: 'Opera', description: 'Alternative Browser', category: 'Web Browsers', icon: 'opera', chocoPackage: 'opera' },
  { id: 'firefox', name: 'Firefox', description: 'Extensible Browser', category: 'Web Browsers', icon: 'firefox', chocoPackage: 'firefox' },
  { id: 'edge', name: 'Edge', description: 'Microsoft Edge Browser', category: 'Web Browsers', icon: 'edge', chocoPackage: 'microsoft-edge' },
  { id: 'brave', name: 'Brave', description: 'Privacy Browser', category: 'Web Browsers', icon: 'brave', chocoPackage: 'brave' },

  // Messaging
  { id: 'zoom', name: 'Zoom', description: 'Video Conference', category: 'Messaging', icon: 'zoom', chocoPackage: 'zoom' },
  { id: 'discord', name: 'Discord', description: 'Voice and Text Chat', category: 'Messaging', icon: 'discord', chocoPackage: 'discord' },
  { id: 'teams', name: 'Teams', description: 'Video Conferencing, Meetings, Calling', category: 'Messaging', icon: 'teams', chocoPackage: 'microsoft-teams' },
  { id: 'pidgin', name: 'Pidgin', description: 'Multi-IM Client', category: 'Messaging', icon: 'pidgin', chocoPackage: 'pidgin' },
  { id: 'thunderbird', name: 'Thunderbird', description: 'Email Reader by Mozilla', category: 'Messaging', icon: 'thunderbird', chocoPackage: 'thunderbird' },
  { id: 'trillian', name: 'Trillian', description: 'Trillian IM', category: 'Messaging', icon: 'trillian', chocoPackage: 'trillian' },

  // Media
  { id: 'itunes', name: 'iTunes', description: 'Music/Media Manager', category: 'Media', icon: 'itunes', chocoPackage: 'itunes' },
  { id: 'vlc', name: 'VLC', description: 'Great Video Player', category: 'Media', icon: 'vlc', chocoPackage: 'vlc' },
  { id: 'aimp', name: 'AIMP', description: 'Music Player', category: 'Media', icon: 'aimp', chocoPackage: 'aimp' },
  { id: 'foobar2000', name: 'foobar2000', description: 'Music Player', category: 'Media', icon: 'foobar2000', chocoPackage: 'foobar2000' },
  { id: 'winamp', name: 'Winamp', description: 'Music Player', category: 'Media', icon: 'winamp', chocoPackage: 'winamp' },
  { id: 'musicbee', name: 'MusicBee', description: 'Music Manager & Player', category: 'Media', icon: 'musicbee', chocoPackage: 'musicbee' },
  { id: 'audacity', name: 'Audacity', description: 'Audio Editor', category: 'Media', icon: 'audacity', chocoPackage: 'audacity' },
  { id: 'klitecodecs', name: 'K-Lite Codecs', description: 'Video decoders plus Media Player Classic', category: 'Media', icon: 'klite', chocoPackage: 'k-litecodecpackfull' },
  { id: 'gom', name: 'GOM', description: 'Video Player', category: 'Media', icon: 'gom', chocoPackage: 'gomplayerglobal' },
  { id: 'spotify', name: 'Spotify', description: 'Online Music Service', category: 'Media', icon: 'spotify', chocoPackage: 'spotify' },
  { id: 'mediamonkey', name: 'MediaMonkey', description: 'Music Organizer', category: 'Media', icon: 'mediamonkey', chocoPackage: 'mediamonkey' },
  { id: 'handbrake', name: 'HandBrake', description: 'Convert Videos', category: 'Media', icon: 'handbrake', chocoPackage: 'handbrake' },

  // Imaging
  { id: 'krita', name: 'Krita', description: 'Painting Program', category: 'Imaging', icon: 'krita', chocoPackage: 'krita' },
  { id: 'blender', name: 'Blender', description: '3D Creation Suite', category: 'Imaging', icon: 'blender', chocoPackage: 'blender' },
  { id: 'paintnet', name: 'Paint.NET', description: 'Image Editor', category: 'Imaging', icon: 'paintnet', chocoPackage: 'paint.net' },
  { id: 'gimp', name: 'GIMP', description: 'Open Source Image Editor', category: 'Imaging', icon: 'gimp', chocoPackage: 'gimp' },
  { id: 'irfanview', name: 'IrfanView', description: 'Image Viewer', category: 'Imaging', icon: 'irfanview', chocoPackage: 'irfanview' },
  { id: 'xnview', name: 'XnView', description: 'Image Viewer', category: 'Imaging', icon: 'xnview', chocoPackage: 'xnview' },
  { id: 'inkscape', name: 'Inkscape', description: 'Vector Graphics Editor', category: 'Imaging', icon: 'inkscape', chocoPackage: 'inkscape' },
  { id: 'faststone', name: 'FastStone', description: 'FastStone Image Viewer', category: 'Imaging', icon: 'faststone', chocoPackage: 'fsviewer' },
  { id: 'greenshot', name: 'Greenshot', description: 'Screenshot Tool', category: 'Imaging', icon: 'greenshot', chocoPackage: 'greenshot' },
  { id: 'sharex', name: 'ShareX', description: 'Screenshot Uploader', category: 'Imaging', icon: 'sharex', chocoPackage: 'sharex' },

  // Documents
  { id: 'foxitreader', name: 'Foxit Reader', description: 'Alternative PDF Reader', category: 'Documents', icon: 'foxit', chocoPackage: 'foxitreader' },
  { id: 'libreoffice', name: 'LibreOffice', description: 'Free Office Suite', category: 'Documents', icon: 'libreoffice', chocoPackage: 'libreoffice-fresh' },
  { id: 'onlyoffice', name: 'OnlyOffice', description: 'Office Suite', category: 'Documents', icon: 'onlyoffice', chocoPackage: 'onlyoffice' },
  { id: 'sumatrapdf', name: 'SumatraPDF', description: 'Lightweight PDF Reader', category: 'Documents', icon: 'sumatra', chocoPackage: 'sumatrapdf' },
  { id: 'pdf24', name: 'PDF24', description: 'PDF Creator and Converter', category: 'Documents', icon: 'pdf24', chocoPackage: 'pdf24' },
  { id: 'cutepdf', name: 'CutePDF', description: 'Print Documents as PDF Files', category: 'Documents', icon: 'cutepdf', chocoPackage: 'cutepdf' },
  { id: 'openoffice', name: 'OpenOffice', description: 'Free Office Suite', category: 'Documents', icon: 'openoffice', chocoPackage: 'openoffice' },

  // Security
  { id: 'malwarebytes', name: 'Malwarebytes', description: 'Malware Remover', category: 'Security', icon: 'malwarebytes', chocoPackage: 'malwarebytes' },
  { id: 'avast', name: 'Avast', description: 'Avast Free Antivirus', category: 'Security', icon: 'avast', chocoPackage: 'avastfreeantivirus' },
  { id: 'avg', name: 'AVG', description: 'AVG Free Antivirus', category: 'Security', icon: 'avg', chocoPackage: 'avgfree' },
  { id: 'spybot', name: 'Spybot 2', description: 'Spyware Remover', category: 'Security', icon: 'spybot', chocoPackage: 'spybot' },
  { id: 'avira', name: 'Avira', description: 'Avira Free Antivirus', category: 'Security', icon: 'avira', chocoPackage: 'avira-free-antivirus' },

  // File Sharing
  { id: 'qbittorrent', name: 'qBittorrent', description: 'Free Bittorrent Client', category: 'File Sharing', icon: 'qbittorrent', chocoPackage: 'qbittorrent' },

  // Online Storage
  { id: 'dropbox', name: 'Dropbox', description: 'Great Online Backup/File Sync', category: 'Online Storage', icon: 'dropbox', chocoPackage: 'dropbox' },
  { id: 'googledrive', name: 'Google Drive for Desktop', description: 'Online File Sync', category: 'Online Storage', icon: 'googledrive', chocoPackage: 'googledrive' },
  { id: 'onedrive', name: 'OneDrive', description: 'Online File Sync by Microsoft', category: 'Online Storage', icon: 'onedrive', chocoPackage: 'onedrive' },
  { id: 'sugarsync', name: 'SugarSync', description: 'Online Backup/File Sync', category: 'Online Storage', icon: 'sugarsync', chocoPackage: 'sugarsync' },

  // Other
  { id: 'evernote', name: 'Evernote', description: 'Online Notes', category: 'Other', icon: 'evernote', chocoPackage: 'evernote' },
  { id: 'googleearth', name: 'Google Earth', description: 'Online Atlas by Google', category: 'Other', icon: 'googleearth', chocoPackage: 'googleearthpro' },
  { id: 'steam', name: 'Steam', description: 'App Store for Games', category: 'Other', icon: 'steam', chocoPackage: 'steam' },
  { id: 'epicgames', name: 'Epic Games Launcher', description: 'Epic Games Store', category: 'Other', icon: 'epic', chocoPackage: 'epicgameslauncher' },
  { id: 'keepass', name: 'KeePass 2', description: 'Password Manager', category: 'Other', icon: 'keepass', chocoPackage: 'keepass' },
  { id: 'everything', name: 'Everything', description: 'Local File Search Engine', category: 'Other', icon: 'everything', chocoPackage: 'everything' },

  // Remote Access
  { id: 'anydesk', name: 'AnyDesk', description: 'Remote Desktop', category: 'Remote Access', icon: 'anydesk', chocoPackage: 'anydesk' },
  { id: 'teamviewer', name: 'TeamViewer 15', description: 'Remote Access Tool', category: 'Remote Access', icon: 'teamviewer', chocoPackage: 'teamviewer' },
  { id: 'realvnc', name: 'RealVNC', description: 'RealVNC Remote Access', category: 'Remote Access', icon: 'realvnc', chocoPackage: 'realvnc' },
  { id: 'ultravnc', name: 'UltraVNC', description: 'UltraVNC Remote Access', category: 'Remote Access', icon: 'ultravnc', chocoPackage: 'ultravnc' },
  { id: 'rustdesk', name: 'RustDesk', description: 'Open Source Remote Desktop', category: 'Remote Access', icon: 'rustdesk', chocoPackage: 'rustdesk' },

  // Utilities
  { id: 'imgburn', name: 'ImgBurn', description: 'Disc Burner', category: 'Utilities', icon: 'imgburn', chocoPackage: 'imgburn' },
  { id: 'teracopy', name: 'TeraCopy', description: 'Better File Copy', category: 'Utilities', icon: 'teracopy', chocoPackage: 'teracopy' },
  { id: 'cdburnerxp', name: 'CDBurnerXP', description: 'Disc Burner', category: 'Utilities', icon: 'cdburnerxp', chocoPackage: 'cdburnerxp' },
  { id: 'revo', name: 'Revo', description: 'App Uninstaller', category: 'Utilities', icon: 'revo', chocoPackage: 'revo-uninstaller' },
  { id: 'windirstat', name: 'WinDirStat', description: 'Directory Statistics', category: 'Utilities', icon: 'windirstat', chocoPackage: 'windirstat' },
  { id: 'wiztree', name: 'WizTree', description: 'Directory Statistics', category: 'Utilities', icon: 'wiztree', chocoPackage: 'wiztree' },
  { id: 'glary', name: 'Glary', description: 'System Utilities', category: 'Utilities', icon: 'glary', chocoPackage: 'glaryutilities' },
  { id: 'openshell', name: 'Open-Shell', description: 'Old-Style Start Menu', category: 'Utilities', icon: 'openshell', chocoPackage: 'open-shell' },
  { id: 'ccleaner', name: 'CCleaner', description: 'PC Crap Remover', category: 'Utilities', icon: 'ccleaner', chocoPackage: 'ccleaner' },

  // Compression
  { id: '7zip', name: '7-Zip', description: 'Great Compression App', category: 'Compression', icon: '7zip', chocoPackage: '7zip' },
  { id: 'peazip', name: 'PeaZip', description: 'File Compression Tool', category: 'Compression', icon: 'peazip', chocoPackage: 'peazip' },
  { id: 'winrar', name: 'WinRAR', description: 'Another Compression Tool', category: 'Compression', icon: 'winrar', chocoPackage: 'winrar' },

  // Developer Tools
  { id: 'python3', name: 'Python 3', description: 'Programming Language', category: 'Developer Tools', icon: 'python', chocoPackage: 'python' },
  { id: 'python2', name: 'Python 2', description: 'Great Programming Language', category: 'Developer Tools', icon: 'python', chocoPackage: 'python2' },
  { id: 'git', name: 'Git', description: 'Version Control System', category: 'Developer Tools', icon: 'git', chocoPackage: 'git' },
  { id: 'filezilla', name: 'FileZilla', description: 'FTP Client', category: 'Developer Tools', icon: 'filezilla', chocoPackage: 'filezilla' },
  { id: 'notepadplusplus', name: 'Notepad++', description: 'Programmer\'s Editor', category: 'Developer Tools', icon: 'notepadplusplus', chocoPackage: 'notepadplusplus' },
  { id: 'winscp', name: 'WinSCP', description: 'SCP Client', category: 'Developer Tools', icon: 'winscp', chocoPackage: 'winscp' },
  { id: 'putty', name: 'PuTTY', description: 'SSH client', category: 'Developer Tools', icon: 'putty', chocoPackage: 'putty' },
  { id: 'winmerge', name: 'WinMerge', description: 'Compare and Merge Files', category: 'Developer Tools', icon: 'winmerge', chocoPackage: 'winmerge' },
  { id: 'eclipse', name: 'Eclipse', description: 'IDE for Java', category: 'Developer Tools', icon: 'eclipse', chocoPackage: 'eclipse' },
  { id: 'vscode', name: 'Visual Studio Code', description: 'Programmer\'s Editor', category: 'Developer Tools', icon: 'vscode', chocoPackage: 'vscode' },
  { id: 'cursor', name: 'Cursor', description: 'Programmer\'s Editor', category: 'Developer Tools', icon: 'cursor', chocoPackage: 'cursor' },
  { id: 'javaruntime', name: 'Java Runtime (JRE)', description: 'Java Runtime Environment', category: 'Developer Tools', icon: 'java', chocoPackage: 'javaruntime' },
  { id: 'jdk', name: 'Java SDK (JDK)', description: 'Java Development Kit', category: 'Developer Tools', icon: 'java', chocoPackage: 'openjdk' },
  
  // Additional Tools
  { id: 'totalcommander', name: 'Total Commander', description: 'File Manager', category: 'Utilities', icon: 'totalcommander', chocoPackage: 'totalcommander' },
  { id: 'affinity', name: 'Affinity Designer', description: 'Professional Graphic Design', category: 'Imaging', icon: 'affinity', chocoPackage: 'affinity-designer' },
];

export const categoryKeys = [
  'webBrowsers',
  'messaging',
  'media',
  'imaging',
  'documents',
  'security',
  'fileSharing',
  'onlineStorage',
  'other',
  'remoteAccess',
  'utilities',
  'compression',
  'developerTools'
];

// Map category keys to internal category names (for filtering)
export const categoryMap: Record<string, string> = {
  'webBrowsers': 'Web Browsers',
  'messaging': 'Messaging',
  'media': 'Media',
  'imaging': 'Imaging',
  'documents': 'Documents',
  'security': 'Security',
  'fileSharing': 'File Sharing',
  'onlineStorage': 'Online Storage',
  'other': 'Other',
  'remoteAccess': 'Remote Access',
  'utilities': 'Utilities',
  'compression': 'Compression',
  'developerTools': 'Developer Tools'
};
