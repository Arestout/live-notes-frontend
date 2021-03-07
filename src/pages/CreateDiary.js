import React from 'react';
import '../App.css';
import DiaryForm from '../components/DiaryForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Copyright from '../components/Copyright/Copyright';

export default function CreateDiary() {
  return (
    <>
      <Container className="App">
        <CssBaseline />
        <Avatar
          style={{
            marginTop: '64px',
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItems: 'center',
          }}
        ></Avatar>
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
