import React from 'react';
import Navigation from './Navigation';
import withAuthorization from './withAuthorization';

const HomePage = () =>
  <div>
      <Navigation/>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);