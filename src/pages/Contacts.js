import React from 'react';
import '../App.css';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  information: {
    marginLeft: theme.spacing(7),
  },
}));

export default function Contacts() {
  const classes = useStyles();
  return (
    <>
      <Box mt={5}>
        <Typography variant="h5" className={classes.root}>
          LiveNote Inc
          <LibraryBooksIcon />
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="h5" component="h5" className={classes.root}>
          Контакты
        </Typography>
      </Box>
      <Grid container direction="row">
        <Box mt={5} className={classes.information}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af1ea57a089c9a873f788d7388bfc66ec51606aad431ff3fdd7c94329383ce52b&amp;source=constructor"
            width="539"
            height="393"
            frameBorder="0"
          ></iframe>
        </Box>
        <Box mt={5} className={classes.information}>
          <Typography>
            Адрес: 1053 DH, Kinkerstraat 87, North Holland, Rotterdam
          </Typography>
          <Box mt={5}></Box>
          <Typography>Телефон: +020 618 3858</Typography>
          <Box mt={5}></Box>
          <Typography>Размещение рекламы:</Typography>
          <Link>sales@livenote.com</Link>
          <Box mt={5}></Box>
          <Typography>Тех. поддержка:</Typography>
          <Link>support@livenote.com</Link>
          <Box mt={5}></Box>
          <Typography> Сотрудничество :</Typography>
          <Link>pr@livenote.com</Link>
          <Box mt={5}></Box>
        </Box>
      </Grid>
      <Box mt={5}></Box>
      <Copyright />
    </>
  );
}
