import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Coupon Trading Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <Button disabled={!isLoggedIn}>Available Coupons</Button>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>View Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Button>Signin</Button>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
