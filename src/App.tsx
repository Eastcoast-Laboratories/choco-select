import React, { useState } from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header/Header';
import { PackageList } from './components/PackageList/PackageList';
import { CommandGenerator } from './components/CommandGenerator/CommandGenerator';
import { packages } from './data/packages';
import './i18n/config';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const { t } = useTranslation();
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const handlePackageToggle = (id: string) => {
    setSelectedPackages(prev => 
      prev.includes(id) 
        ? prev.filter(pkgId => pkgId !== id)
        : [...prev, id]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flex: 1, py: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
              {t('app.subtitle')}
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
              {t('app.description')}
            </Typography>
          </Container>
          
          <PackageList 
            selectedPackages={selectedPackages} 
            onPackageToggle={handlePackageToggle} 
          />
          
          <Container maxWidth="lg">
            <CommandGenerator 
              selectedPackages={selectedPackages} 
              packages={packages} 
            />
          </Container>
        </Box>
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              {new Date().getFullYear()} - {t('app.footer')}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
