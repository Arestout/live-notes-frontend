import React from 'react';
import '../App.css';
import Welcome from '../components/Welcome';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import LabelBottomNavigation from '../components/LabelBottomNavigation';

function Home() {
  return (
    <>
      <Welcome />
      <Cards />
      <LabelBottomNavigation />
      <Footer />
    </>
  );
}

export default Home;
