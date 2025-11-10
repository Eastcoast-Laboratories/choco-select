import React from 'react';
import { Box, Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
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
REM Check for administrator privileges
net session >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ========================================
    echo ERROR: Administrator privileges required!
    echo ========================================
    echo.
    echo Please right-click this file and select "Run as administrator"
    echo.
    pause
    exit /b 1
)

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
    <Paper elevation={3} sx={{ p: 2, maxWidth: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        {/* Title */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', minWidth: 'fit-content' }}>
          {t('command.title')}:
        </Typography>
        
        {/* Command Box */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            px: 2,
            py: 1,
            borderRadius: 1,
            fontFamily: 'monospace',
            flex: 1,
            minWidth: '200px',
            maxWidth: '400px',
          }}
        >
          <Typography component="pre" sx={{ m: 0, fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {command}
          </Typography>
        </Box>
        
        {/* Buttons */}
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleCopyToClipboard}
          startIcon={<ContentCopyIcon />}
        >
          {t('command.copy')}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={handleDownloadBat}
          startIcon={<DownloadIcon />}
        >
          {t('command.download')}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          href="https://chocolatey.org/install"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('command.install')}
        </Button>
        
        {/* Help Icon with Tooltip */}
        <Tooltip title={t('command.note')} arrow placement="bottom">
          <IconButton size="small" color="primary">
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};
