import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://community.chocolatey.org/packages?q=${encodeURIComponent(searchQuery)}`, '_blank');
      setSearchQuery('');
    }
  };
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            CHOCO-SELECT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CHOCO-SELECT
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                size="small"
                placeholder={t('header.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ 
                  backgroundColor: 'background.paper',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    height: '36px'
                  }
                }}
              />
              <IconButton type="submit" color="primary" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
            <Button
              href="https://github.com/Eastcoast-Laboratories/choco-select"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              {t('header.github')}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
