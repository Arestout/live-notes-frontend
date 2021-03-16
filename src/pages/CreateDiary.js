import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

import { Typography, Container, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../components/Copyright/Copyright';
import ImageAvatar from '../components/Avatar/Avatar';
import DiaryForm from '../components/DiaryForm';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function CreateDiary() {
  const { auth } = useAuth();
  const { user } = auth;
  const classes = useStyles();

  if (!user) {
    return null;
  }

  return (
    <>
      <Container className="App">
        <CssBaseline />
        <div className={classes.avatarContainer}>
          <ImageAvatar />
          <p>{user.login}</p>
        </div>
        <Typography component="h1" variant="h5" align="center">
          Создать запись
        </Typography>
        <DiaryForm />
        <Box mt={5}></Box>
      </Container>
      <Box mt={5}></Box>
      <Copyright />
    </>
  );
}
