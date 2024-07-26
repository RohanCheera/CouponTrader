import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../thunks/authThunks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email,password);
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      const { token } = resultAction.payload; // Get the token from the payload
      localStorage.setItem('token', token); // Save token to local storage
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <Form className='login-form' onSubmit={handleSubmit}>
        <Link to={'/'} className='close-button'>
          <IoClose/>
        </Link>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
        <hr/>
        <Link to={'/register'}>
          <Button variant="primary" type="button">
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
