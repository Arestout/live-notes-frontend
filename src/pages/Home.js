import React from 'react';
import '../App.css';
import Welcome from '../components/Welcome';
import LabelBottomNavigation from '../components/LabelBottomNavigation';
import Content from '../components/Content';
import { Box } from '@material-ui/core';

function Home() {
  return (
    <>
      <Welcome />
      <Content />
      <Box mt={5}></Box>
      <LabelBottomNavigation />
    </>
  );
}

export default Home;
