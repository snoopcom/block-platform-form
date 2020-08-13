import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Main from '../main/Main';
import * as actions from '../../store/actions';
import './App.scss';
import historyObj from '../../history';

const App = ({ getUser }) => {
  const logAccount = async () => {
    const token = localStorage.getItem('token');
    if (token === null) {
      historyObj.go(-1);
    }
    if (token) {
      await getUser();
    }
  };

  useEffect(() => {
    logAccount();
  }, []);

  return (
    <HashRouter>
      <Switch>
        <div className="App">
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Main} />
        </div>
      </Switch>
    </HashRouter>
  );
};

App.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
