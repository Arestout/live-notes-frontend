import React from 'react';
import '../App.css';
import Welcome from '../components/Home/Welcome';
import LabelBottomNavigation from '../components/Home/LabelBottomNavigation';
import Content from '../components/Home/Content';
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
