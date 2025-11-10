import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { PackageList } from '../components/PackageList/PackageList';
import { CommandGenerator } from '../components/CommandGenerator/CommandGenerator';
import { packages } from '../data/packages';

export const Home: React.FC = () => {
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const handlePackageToggle = (id: string) => {
    setSelectedPackages(prev => 
      prev.includes(id) 
        ? prev.filter(pkgId => pkgId !== id)
        : [...prev, id]
    );
  };

  return (
    <Box component="main" sx={{ flex: 1, py: 2 }}>
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'background.default', py: 1 }}>
        <Container maxWidth="lg">
          <CommandGenerator 
            selectedPackages={selectedPackages} 
            packages={packages} 
          />
        </Container>
      </Box>
      
      <PackageList 
        selectedPackages={selectedPackages} 
        onPackageToggle={handlePackageToggle} 
      />
    </Box>
  );
};
