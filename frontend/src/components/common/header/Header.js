import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { logout } from '../../../slices/authSlice';
import './header.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, username } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-container">
        <Link to="/" className="app-title">
          Coupon Wallet
        </Link>
        <div className="menu-bar">
          <Link
            to={isLoggedIn ? '/coupons' : '#'}
            className={`main-menu-item ${!isLoggedIn ? 'disabled-link' : ''}`}
            onClick={(e) => !isLoggedIn && e.preventDefault()}
          >
            Available Coupons
          </Link>
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">View Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sign In
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate('/login')}>Sign In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
