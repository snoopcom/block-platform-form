import React /* { useEffect } */ from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Main from '../main/Main';
// import { access } from '../../api/Index';
import './App.scss';

const App = () => {
  // useEffect(() => {
  //   access();
  // }, []);
  console.log('hello');
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
//
