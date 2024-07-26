import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../thunks/authThunks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    pic: ''
  });

  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await dispatch(register({ ...userData, image })).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="register-container">
      <Form className='register-form' onSubmit={handleSubmit}>
        <Link to={'/'} className='close-button'>
          <IoClose />
        </Link>
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>

        <hr />
        <Link to={'/login'}>
          <Button variant="secondary">
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Register;
