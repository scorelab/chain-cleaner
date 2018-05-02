import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
     <Navbar inverse collapseOnSelect style={{borderRadius:'0'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={routes.HOME}>Chain Kleaner</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <LinkContainer to="/report-heists">
                <NavItem eventKey={2}>
                  Report Heists
                </NavItem>
             </LinkContainer>
            <NavItem eventKey={3}>
              <SignOutButton/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;