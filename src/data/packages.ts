export interface Package {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  chocoPackage: string;
}

export const packages: Package[] = [
  {
    id: 'chrome',
    name: 'Google Chrome',
    description: 'Web browser by Google',
    category: 'Browsers',
    icon: 'chrome',
    chocoPackage: 'googlechrome'
  },
  {
    id: 'firefox',
    name: 'Mozilla Firefox',
    description: 'Web browser by Mozilla',
    category: 'Browsers',
    icon: 'firefox',
    chocoPackage: 'firefox'
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'Code editor by Microsoft',
    category: 'Development',
    icon: 'code',
    chocoPackage: 'vscode'
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Distributed version control system',
    category: 'Development',
    icon: 'git',
    chocoPackage: 'git'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime',
    category: 'Development',
    icon: 'node-js',
    chocoPackage: 'nodejs-lts'
  },
  {
    id: '7zip',
    name: '7-Zip',
    description: 'File archiver',
    category: 'Utilities',
    icon: 'file-archive',
    chocoPackage: '7zip'
  },
  {
    id: 'vlc',
    name: 'VLC Media Player',
    description: 'Media player',
    category: 'Media',
    icon: 'play',
    chocoPackage: 'vlc'
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Team communication',
    category: 'Communication',
    icon: 'slack',
    chocoPackage: 'slack'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Voice and text chat',
    category: 'Communication',
    icon: 'discord',
    chocoPackage: 'discord'
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Programming language',
    category: 'Development',
    icon: 'python',
    chocoPackage: 'python'
  },
  // Weitere Pakete können hier hinzugefügt werden
];

export const categories = [
  'Browsers',
  'Development',
  'Utilities',
  'Media',
  'Communication'
];
