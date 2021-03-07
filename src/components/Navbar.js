import React from 'react';
import { Link } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262D33',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            LiveNote
            <LibraryBooksIcon />
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/diaries">
            Дневники
          </Button>
          <Button color="inherit" component={Link} to="/sign-in">
            Войти
          </Button>
          <Button color="inherit" component={Link} to="/sign-up">
            Регистрация
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
