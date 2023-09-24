// TeamMember.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    flex: 1,
    objectFit: 'cover', // This makes the image fit within the card without stretching
  },
});

const TeamMember = ({ name, image, bio }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        style={{ maxWidth: "25%" }}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{bio}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
