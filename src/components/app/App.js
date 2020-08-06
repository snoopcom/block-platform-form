import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Main from '../main/Main';
import { getToken } from '../../api/Index';
import './App.scss';

const App = () => {
  // useEffect(() => {
  //   getProfileFetch();
  // });
  getToken();
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

export default App;
