import React, { useState } from 'react';
import { Avatar, Box } from '@mui/material';

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
  const [imageError, setImageError] = useState(false);
  const iconPath = `/icons/${icon}.png`;

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  // Try to load the real icon first, fallback to avatar if it fails
  if (!imageError) {
    return (
      <Box
        component="img"
        src={iconPath}
        alt={`${name} icon`}
        onError={() => setImageError(true)}
        sx={{
          width: 40,
          height: 40,
          objectFit: 'contain',
        }}
      />
    );
  }

  // Fallback to colored avatar with initials
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
