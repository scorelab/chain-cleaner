import React, { Component } from 'react';
import { BrowserRouter as Router,Route, } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
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
    </div>
  </Router>

// class App extends Component {
//   render() {
//     return (
//             <div className="limiter">
//                 <div className="container-login100 back-login">
//                     <div className="wrap-login100">
//                         <form className="login100-form validate-form">
//                             <span className="login100-form-title p-b-26" style={{color:'#52595b', fontSize:'16px',fontFamily: 'Poppins-Regular'}}>
//                                 Welcome to the
//                             </span>
//                             <span className="login100-form-title p-b-48">
//                                 <img src={require('../../public/images/l.jpeg')} style={{width:'240px'}} alt="true" />
//                             </span>
//
//                             <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
//                                 <input className="input100" type="text" name="email" />
//                                 <span className="focus-input100" data-placeholder="Email" />
//                             </div>
//
//                             <div className="wrap-input100 validate-input" data-validate="Enter password">
//                                 <span className="btn-show-pass">
//                                     <i className="zmdi zmdi-eye" />
//                                 </span>
//                                 <input className="input100" type="password" name="pass" />
//                                 <span className="focus-input100" data-placeholder="Password" />
//                             </div>
//
//                             <div className="container-login100-form-btn">
//                                 <div className="wrap-login100-form-btn">
//                                     <div className="login100-form-bgbtn"/>
//                                     <button className="login100-form-btn">
//                                         Login
//                                     </button>
//                                 </div>
//                             </div>
//
//                             <div className="text-center p-t-115">
//                                 <span className="txt1">
//                                     Don’t have an account?
//                                 </span>
//
//                                 <a className="txt2" href="#">
//                                     Sign Up
//                                 </a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//     );
//   }
// }

export default withAuthentication(App);
