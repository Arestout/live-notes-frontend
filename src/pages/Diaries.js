import React from 'react';
import '../App.css';
import CategoryNav from '../components/CategoryNav';
import DiariesCards from '../components/DiariesCards/DiariesCards';
import Footer from '../components/Footer';

export default function Diaries() {
  return (
    <>
      <CategoryNav />
      <DiariesCards />
      <Footer />
    </>
  );
}
