import React from 'react';
import { Box, List, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { packages, categoryKeys, categoryMap } from '../../data/packages';
import { PackageItem } from '../PackageItem/PackageItem';

interface PackageListProps {
  selectedPackages: string[];
  onPackageToggle: (id: string) => void;
}

export const PackageList: React.FC<PackageListProps> = ({ selectedPackages, onPackageToggle }) => {
  const { t } = useTranslation();
  
  const getPackagesByCategory = (category: string) => {
    return packages.filter((pkg) => pkg.category === category);
  };

  return (
    <Box sx={{ width: '100%', mt: 4, overflowX: 'auto' }}>
      <Box sx={{ display: 'flex', gap: 3, minWidth: 'fit-content', px: 2 }}>
        {categoryKeys.map((categoryKey) => {
          const categoryName = categoryMap[categoryKey];
          return (
            <Paper
              key={categoryKey}
              elevation={3}
              sx={{
                minWidth: 280,
                maxWidth: 320,
                flex: '0 0 auto',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '4px 4px 0 0',
                }}
              >
                <Typography variant="h6" component="h2" fontWeight="bold">
                  {t(`categories.${categoryKey}`)}
                </Typography>
              </Box>
              <List sx={{ p: 2 }}>
                {getPackagesByCategory(categoryName).map((pkg) => (
                  <PackageItem
                    key={pkg.id}
                    pkg={pkg}
                    isSelected={selectedPackages.includes(pkg.id)}
                    onToggle={onPackageToggle}
                  />
                ))}
              </List>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};
