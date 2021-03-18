import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAuth } from '../hooks/useAuth';
import { Box } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262D33',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    display: 'flex',
    justifyContent: 'space-between',
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
      <AppBar
        position="static"
        classes={{ root: classes.appBarRoot }}
        className={classes.appBar}
      >
        <Toolbar classes={{ root: classes.appBarRoot }}>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h5" className={classes.title}>
              LiveNote
              <LibraryBooksIcon />
            </Typography>
          </Button>
          <Box className={classes.menuButton}>
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
                <Button color="inherit" component={Link} to="/diary-list">
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
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
