import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/authActions.js';
import Upload from '../../utils/Upload.js';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pic, setPic] = useState('');
  const [picFile, setPicFile] = useState(null); // State for file input
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let picUrl = pic; // Default to existing pic URL if no new file is uploaded
    if (picFile) {
      try {
        picUrl = await Upload(picFile);
      } catch (error) {
        console.error('Failed to upload image.');
        return; // Prevent submission if image upload fails
      }
    }

    dispatch(register({ name, email, password, pic: picUrl }));
  };

  return (
    <Container className="mt-4">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setPicFile(e.target.files[0])}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
