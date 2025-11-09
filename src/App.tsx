import React, { useState } from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';
import { Header } from './components/Header/Header';
import { PackageList } from './components/PackageList/PackageList';
import { CommandGenerator } from './components/CommandGenerator/CommandGenerator';
import { packages } from './data/packages';

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
              Wählen Sie die gewünschten Programme aus
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Wählen Sie die gewünschten Programme aus und generieren Sie den Chocolatey-Installationsbefehl.
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
              {new Date().getFullYear()} - Choco Select - Ein Open-Source-Projekt
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
