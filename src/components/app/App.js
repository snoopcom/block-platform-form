import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Main from '../main/Main';
import * as actions from '../../store/actions';
import './App.scss';
import historyObj from '../../history';

const App = (/* { getUser } */) => {
  const logAccount = async () => {
    // await getUser();
    historyObj.back();
  };

  useEffect(() => {
    logAccount();
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    </HashRouter>
  );
};

export default connect(null, actions)(App);
