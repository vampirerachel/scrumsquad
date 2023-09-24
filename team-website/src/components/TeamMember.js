// TeamMember.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const TeamMember = ({ name, image, bio }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{bio}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
