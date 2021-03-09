import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAuth } from '../hooks/useAuth';

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const { dispatchLogOut } = useAuth();

  const onLogOut = (e) => {
    e.preventDefault();
    dispatchLogOut();
    history.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
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
          {user ? (
            <>
              <Button color="inherit" component={Link} to="/create">
                Создать запись
              </Button>
              <Button color="inherit" component={Link} to="/">
                Мои записи
              </Button>
              <Button color="inherit" onClick={onLogOut}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/sign-in">
                Войти
              </Button>
              <Button color="inherit" component={Link} to="/sign-up">
                Регистрация
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
