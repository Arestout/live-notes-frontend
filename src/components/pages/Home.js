import React from 'react';
import '../../App.css';
import Welcome from '../Welcome';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
    <Welcome/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
