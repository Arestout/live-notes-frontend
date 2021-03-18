import React from 'react';
import Card from './Cards';
import { Grid, Container } from '@material-ui/core';
import MakerList from './constants';

const Content = () => {
  const getMakerCard = (MakerObj) => {
    return (
      <Grid key={MakerObj.index} item xs={6} sm={4}>
        <Card {...MakerObj} editHidden deleteHidden />
      </Grid>
    );
  };

  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={1}>
        {MakerList.map((MakerObj, index) =>
          getMakerCard({ ...MakerObj, index })
        )}
      </Grid>
    </Container>
  );
};

export default Content;
