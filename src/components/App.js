import React from 'react';
import { BrowserRouter as Router,Route, } from 'react-router-dom';
import './App.css';

import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import ReportPage from './Report';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import LoginwithGoogle from "./LoginwithGoogle";
import LandingPage from "./Landing";

const App = () =>
  <Router>
    <div>
      {/*<Navigation />*/}
      {/*<hr/>*/}
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
      <Route
        exact path={routes.GOOGLE_LOGIN}
        component={() => <LoginwithGoogle />}
      />
      <Route
        exact path={routes.REPORT_HEISTS}
        component={() => <ReportPage />}
      />
    </div>
  </Router>

export default withAuthentication(App);
