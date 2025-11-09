import React from 'react';
import { Box, Button, Paper, Typography, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from 'react-i18next';
import { Package } from '../../data/packages';

interface CommandGeneratorProps {
  selectedPackages: string[];
  packages: Package[];
}

export const CommandGenerator: React.FC<CommandGeneratorProps> = ({ selectedPackages, packages }) => {
  const { t } = useTranslation();
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

  const handleDownloadBat = () => {
    const batContent = `@echo off
echo ========================================
echo Choco-Select Installation Script
echo ========================================
echo.
echo Installing selected packages...
echo.

REM Check if Chocolatey is installed
where choco >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Chocolatey is not installed!
    echo Please install Chocolatey first from: https://chocolatey.org/install
    echo.
    pause
    exit /b 1
)

REM Install selected packages
${command}

echo.
echo ========================================
echo Installation completed!
echo ========================================
pause
`;

    const blob = new Blob([batContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'choco-install.bat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (selectedPackages.length === 0) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 1200, margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        {t('command.title')}
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
        <Tooltip title={t('command.copy')}>
          <IconButton onClick={handleCopyToClipboard} color="primary">
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCopyToClipboard}
          startIcon={<ContentCopyIcon />}
        >
          {t('command.copy')}
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleDownloadBat}
          startIcon={<DownloadIcon />}
        >
          {t('command.download')}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://chocolatey.org/install"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('command.install')}
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {t('command.note')}
      </Typography>
    </Paper>
  );
};
