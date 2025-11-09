import React from 'react';
import { Box, Button, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Package } from '../../data/packages';

interface CommandGeneratorProps {
  selectedPackages: string[];
  packages: Package[];
}

export const CommandGenerator: React.FC<CommandGeneratorProps> = ({ selectedPackages, packages }) => {
  const getChocolateyCommand = () => {
    if (selectedPackages.length === 0) return '';
    
    const selectedPackageNames = selectedPackages.map(id => {
      const pkg = packages.find(p => p.id === id);
      return pkg ? pkg.chocoPackage : '';
    }).filter(Boolean);
    
    return `choco install ${selectedPackageNames.join(' ')} -y`;
  };

  const command = getChocolateyCommand();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(command);
  };

  if (selectedPackages.length === 0) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 1200, margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        Chocolatey Installationsbefehl
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          p: 2,
          borderRadius: 1,
          fontFamily: 'monospace',
          overflowX: 'auto',
        }}
      >
        <Typography component="pre" sx={{ m: 0, flex: 1, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {command}
        </Typography>
        <Tooltip title="In die Zwischenablage kopieren">
          <IconButton onClick={handleCopyToClipboard} color="primary">
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCopyToClipboard}
          startIcon={<ContentCopyIcon />}
          sx={{ mr: 2 }}
        >
          Befehl kopieren
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://chocolatey.org/install"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chocolatey installieren
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Hinweis: Stellen Sie sicher, dass Chocolatey installiert ist, bevor Sie den Befehl ausführen.
        Klicken Sie auf "Chocolatey installieren" für Anweisungen.
      </Typography>
    </Paper>
  );
};
