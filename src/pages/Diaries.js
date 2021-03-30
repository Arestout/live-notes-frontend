import React from 'react';
import '../App.css';
import CategoryNav from '../components/DiariesCards/CategoryNav';
import DiariesCards from '../components/DiariesCards/DiariesCards';

export default function Diaries() {
  return (
    <>
      <CategoryNav />
      <DiariesCards />
    </>
  );
}
