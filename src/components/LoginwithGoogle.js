import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase,{ auth } from '../firebase';


class LoginwithGoogle extends Component {

}

const GoogleLogin = () =>
  <div>
      <Link to="/google-login"><img src={require('../../public/images/gmail_login.png')} style={{width:"200px"}}/></Link>
  </div>

export default LoginwithGoogle;

export {
  GoogleLogin,
};