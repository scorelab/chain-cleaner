import React, { Component } from 'react';
import { Link,withRouter, } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth } from '../firebase';
import { GoogleLogin } from './LoginwithGoogle';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
         history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

     const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
           <div className="limiter">
                <div className="container-login100 back-login">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                            <span className="login100-form-title p-b-26" style={{color:'#52595b', fontSize:'16px',fontFamily: 'Poppins-Regular'}}>
                                Welcome to the
                            </span>
                            <span className="login100-form-title p-b-48">
                                <img src={require('../../public/images/l.jpeg')} style={{width:'240px'}} alt="true" />
                            </span>

                            <div className="wrap-input100 validate-input">
                                <input
                                  value={username}
                                  onChange={event => this.setState(byPropKey('username', event.target.value))}
                                  type="text"
                                  className="input100"
                                />
                                <span className="focus-input100" data-placeholder="Username" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input
                                  value={email}
                                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                                  type="text"
                                  className="input100"
                                />
                                <span className="focus-input100" data-placeholder="Email" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye" />
                                </span>
                                 <input
                                  value={passwordOne}
                                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                  type="password"
                                  className="input100"
                                />
                                <span className="focus-input100" data-placeholder="Password" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye" />
                                </span>
                                 <input
                                  value={passwordTwo}
                                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                  type="password"
                                  className="input100"
                                />
                                <span className="focus-input100" data-placeholder="Confirm Password" />
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button className="login100-form-btn" disabled={isInvalid} type="submit">
                                      Sign Up
                                    </button>

                                    { error && <p>{error.message}</p> }
                                </div>
                            </div>
                            <div className="text-center p-t-15">
                                <span className="txt1">
                                    <p>
                                     Have an account?
                                     {' '}
                                     <Link to={routes.SIGN_IN}><b>Sign In</b></Link>
                                    </p>
                                </span>
                            </div>

                            <hr />
                            <div className="text-center p-t-15">
                                <span className="txt1">
                                    <GoogleLogin />
                                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
      <Link to={routes.SIGN_UP}><b>Sign Up</b></Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};