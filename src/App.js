import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import { useEntries } from './hooks/useEntries';

import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Diaries from './pages/Diaries';
import SignIn from './pages/AuthSignIn';
import SignUp from './pages/AuthSignUp';
import CreateDiary from './pages/CreateDiary';
import EditDiary from './pages/EditDiary';
import DiaryList from './pages/DiaryList';
import FullRecord from './pages/FullRecord';
import ClippedDrawer from './components/Drawer/Drawer';
import Loader from './components/Loader/Loader';
import Contacts from './pages/Contacts';
import TermsOfUser from './pages/TermsOfUser';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Footer from './components/Footer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
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
  const { dispatchFetchEntries } = useEntries();
  const classes = useStyles();

  useEffect(() => {
    if (auth.access_token) {
      dispatchFetchAuth(auth.access_token);
      dispatchFetchEntries(auth.access_token);
    }
  }, [auth.access_token, dispatchFetchAuth, dispatchFetchEntries]);

  if (auth.error === 'Request failed with status code 401') {
    window.localStorage.removeItem('access_token');
  }

  return (
    <>
      <Router>
        {auth.isAuth || !auth.access_token ? (
          <div className={classes.root}>
            {auth.user && <ClippedDrawer user={auth.user} />}
            <div className={classes.content}>
              <Navbar user={auth.user} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/diary/:id" exact component={FullRecord} />
                <Route path="/diaries/:categoryId" component={Diaries} />
                <Route
                  path="/diaries"
                  render={() =>
                    auth.isAuth ? <Diaries /> : <Redirect to="/sign-in" />
                  }
                />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/create" exact component={CreateDiary} />
                <Route path="/edit/:id" exact component={EditDiary} />
                <Route path="/diary-list" exact component={DiaryList} />
                <Route path="/contacts" exact component={Contacts} />
                <Route path="/terms-of-use" exact component={TermsOfUser} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/support" exact component={Faq} />
              </Switch>
              <Footer />
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
