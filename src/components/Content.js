import React from 'react';
import Card from './Cards';
import { Grid, Container } from '@material-ui/core';
import MakerList from './constants';

const Content = () => {
  const getMakerCard = (MakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <Card {...MakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      {MakerList.map((MakerObj) => getMakerCard(MakerObj))}
    </Grid>
  );
};

export default Content;
