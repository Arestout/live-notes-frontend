import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Diaries from './pages/Diaries';
import SignIn from './pages/AuthSignIn';
import SignUp from './pages/AuthSignUp';
import CreateDiary from './pages/CreateDiary';
import DiaryList from './pages/DiaryList';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/diaries" component={Diaries} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/create" exact component={CreateDiary} />
          <Route path="/diary-list" exact component={DiaryList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
