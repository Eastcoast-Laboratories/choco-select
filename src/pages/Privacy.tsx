import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Privacy: React.FC = () => {
  const { t } = useTranslation();
  
  const ownerName = process.env.REACT_APP_OWNER_NAME || 'Not configured';
  const ownerEmail = process.env.REACT_APP_OWNER_EMAIL || 'Not configured';

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('privacy.title')}
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            {t('privacy.section1.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('privacy.section1.content')}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            {t('privacy.section2.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('privacy.section2.content')}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            {t('privacy.section3.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('privacy.section3.content')}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            {t('privacy.contact.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {ownerName}<br />
            {t('privacy.contact.email')}: {ownerEmail}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
