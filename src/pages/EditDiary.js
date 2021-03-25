import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

import { Typography, Container, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../components/Copyright/Copyright';
import ImageAvatar from '../components/Avatar/Avatar';
import DiaryForm from '../components/DiaryForm';
import { useEntries } from '../hooks/useEntries';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function EditDiary({ match }) {
  const { auth } = useAuth();
  const { user } = auth;
  const classes = useStyles();
  const { entries } = useEntries();

  if (!user) {
    return null;
  }

  const id = match.params.id;
  console.log(id);
  const entryValues = entries.entriesList.filter((entry) => entry.id == id)[0];
  if (entryValues) {
    entryValues.isEdit = true;
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
          Редактировать запись
        </Typography>
        <DiaryForm initialValues={entryValues} />
        <Box mt={5}></Box>
      </Container>
      <Box mt={5}></Box>
      <Copyright />
    </>
  );
}
