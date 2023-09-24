import React from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import TeamMember from '../components/TeamMember';

const teamMembers = [];

for (let i = 1; i <= 8; i++) {
  const member = {
    name: `Team Member ${i}`,
    image: `/images/team-member${i}.jpg`, // Reference the images from the public folder
    bio: `Write a short bio about Team Member ${i} here.`,
  };
  teamMembers.push(member);
}

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <TeamMember
            name={member.name}
            image={member.image}
            bio={member.bio}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
