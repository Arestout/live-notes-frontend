import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Diaries from './pages/Diaries';
import SignIn from './pages/AuthSignIn';
import SignUp from './pages/AuthSignUp';
import CreateDiary from './pages/CreateDiary';
import DiaryList from './pages/DiaryList';
import FullRecord from './pages/FullRecord';
import ClippedDrawer from './components/Drawer/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from './hooks/useAuth';
import Loader from './components/Loader/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    width: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

function App(props) {
  const { auth, dispatchFetchAuth } = useAuth();
  const classes = useStyles();

  useEffect(() => {
    if (auth.access_token) {
      dispatchFetchAuth(auth.access_token);
    }
  }, [auth.access_token, dispatchFetchAuth]);

  // if (auth.isLoading) {
  //   return (
  //     <div className={classes.loader}>
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
      <Router>
        {auth.isAuth || auth.access_token ? (
          <div className={classes.root}>
            {auth.user && <ClippedDrawer user={auth.user} />}
            <div className={classes.content}>
              <Navbar user={auth.user} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/diary/:id" exact component={FullRecord} />
                <Route path="/diaries" component={Diaries} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/create" exact component={CreateDiary} />
                <Route path="/diary-list" exact component={DiaryList} />
              </Switch>
            </div>
          </div>
        ) : (
          <div className={classes.loader}>
            <Loader />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
