import React from 'react';
import Copyright from './Copyright/Copyright';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  Typography,
  Container,
  IconButton,
  Toolbar,
  AppBar,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262D33',
    },
    secondary: {
      main: '#848688',
    },
  },
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconButton: {
    marginLeft: theme.spacing(2),
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5">
            LiveNote
            <LibraryBooksIcon />
          </Typography>
          <Container maxWidth="xs">
            <Copyright />
          </Container>
          <Typography variant="body1" color="inherit">
            <IconButton
              aria-label="facebook"
              color="inherit"
              className={classes.iconButton}
            >
              <FacebookIcon fontSize="default" />
            </IconButton>
            <IconButton
              aria-label="twitter"
              color="inherit"
              className={classes.iconButton}
            >
              <TwitterIcon fontSize="default" />
            </IconButton>
            <IconButton
              aria-label="instagram"
              color="inherit"
              className={classes.iconButton}
            >
              <InstagramIcon fontSize="default" />
            </IconButton>
            <IconButton
              aria-label="instagram"
              color="inherit"
              className={classes.iconButton}
            >
              <LinkedInIcon fontSize="default" />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
