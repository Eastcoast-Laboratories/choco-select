import React from 'react';
import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Package } from '../../data/packages';

interface PackageItemProps {
  pkg: Package;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const PackageItem: React.FC<PackageItemProps> = ({ pkg, isSelected, onToggle }) => {
  return (
    <ListItem
      key={pkg.id}
      disablePadding
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        mb: 1,
        backgroundColor: isSelected ? '#f5f5f5' : 'white',
        '&:hover': {
          backgroundColor: '#fafafa',
        },
      }}
    >
      <ListItemButton role={undefined} onClick={() => onToggle(pkg.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isSelected}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-${pkg.id}` }}
          />
        </ListItemIcon>
        <ListItemText
          id={`checkbox-list-label-${pkg.id}`}
          primary={
            <Typography variant="body1" component="span" fontWeight="medium">
              {pkg.name}
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="text.secondary">
              {pkg.description}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
