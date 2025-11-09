import React, { useState } from 'react';
import { Box, List, Paper, Tab, Tabs, Typography } from '@mui/material';
import { packages, categories } from '../../data/packages';
import { PackageItem } from '../PackageItem/PackageItem';

interface PackageListProps {
  selectedPackages: string[];
  onPackageToggle: (id: string) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const PackageList: React.FC<PackageListProps> = ({ selectedPackages, onPackageToggle }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getPackagesByCategory = (category: string) => {
    return packages.filter((pkg) => pkg.category === category);
  };

  return (
    <Paper elevation={3} sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="package categories"
        >
          <Tab label="All" />
          {categories.map((category, index) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <List>
          {packages.map((pkg) => (
            <PackageItem
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackages.includes(pkg.id)}
              onToggle={onPackageToggle}
            />
          ))}
        </List>
      </TabPanel>

      {categories.map((category, index) => (
        <TabPanel key={category} value={tabValue} index={index + 1}>
          <List>
            {getPackagesByCategory(category).map((pkg) => (
              <PackageItem
                key={pkg.id}
                pkg={pkg}
                isSelected={selectedPackages.includes(pkg.id)}
                onToggle={onPackageToggle}
              />
            ))}
          </List>
        </TabPanel>
      ))}
    </Paper>
  );
};
