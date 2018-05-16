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
            <Link to={routes.LANDING}>Chain Kleaner</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
                <NavItem>
                  Home
                </NavItem>
             </LinkContainer>
              <LinkContainer to="/taint-analyze">
                <NavItem eventKey={2}>
                  Taint Analysis
                </NavItem>
             </LinkContainer>
            <LinkContainer to="/report-heists">
                <NavItem eventKey={3}>
                  Report Heists
                </NavItem>
             </LinkContainer>
            <NavItem eventKey={4}>
              <SignOutButton/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;

const NavigationNonAuth = () =>
    <Navbar collapseOnSelect style={{borderRadius:'0'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={routes.LANDING}>Chain Kleaner</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <LinkContainer to="/taint-analyze">
                  <NavItem eventKey={2}>
                      Taint Analysis
                  </NavItem>
              </LinkContainer>
              <LinkContainer to="/signin">
                  <NavItem eventKey={3}>
                      Sign In
                  </NavItem>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
export default Navigation;