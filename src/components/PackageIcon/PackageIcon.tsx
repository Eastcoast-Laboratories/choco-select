import React from 'react';
import { Avatar } from '@mui/material';

interface PackageIconProps {
  name: string;
  icon: string;
}

// Generate a consistent color based on the package name
const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 65%, 50%)`;
};

export const PackageIcon: React.FC<PackageIconProps> = ({ name, icon }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Avatar
      sx={{
        bgcolor: stringToColor(name),
        width: 40,
        height: 40,
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      {initials}
    </Avatar>
  );
};
