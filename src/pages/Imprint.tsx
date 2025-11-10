import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Imprint: React.FC = () => {
  const { t } = useTranslation();
  
  const ownerName = process.env.REACT_APP_OWNER_NAME || 'Not configured';
  const ownerAddress = process.env.REACT_APP_OWNER_ADDRESS || 'Not configured';
  const ownerCity = process.env.REACT_APP_OWNER_CITY || 'Not configured';
  const ownerCountry = process.env.REACT_APP_OWNER_COUNTRY || 'Not configured';
  const ownerEmail = process.env.REACT_APP_OWNER_EMAIL || 'Not configured';
  const ownerPhone = process.env.REACT_APP_OWNER_PHONE || 'Not configured';

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('imprint.title')}
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t('imprint.responsible')}
          </Typography>
          <Typography variant="body1" paragraph>
            {ownerName}<br />
            {ownerAddress}<br />
            {ownerCity}<br />
            {ownerCountry}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            {t('imprint.contact')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('imprint.email')}: {ownerEmail}<br />
            {t('imprint.phone')}: {ownerPhone}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
