import { Box } from '@material-ui/core';
import React from 'react';
import '../App.css';
import TermsOfUse from '../components/TermsOfUse/TermsOfUse';

export default function TermsOfUser() {
  return (
    <>
      <TermsOfUse />
      <Box mt={5}></Box>
    </>
  );
}
