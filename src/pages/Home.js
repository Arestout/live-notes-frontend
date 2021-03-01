import React from 'react';
import '../App.css';
import Welcome from '../components/Welcome';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Welcome />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
