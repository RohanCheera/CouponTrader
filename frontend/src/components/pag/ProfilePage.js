import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src={user.pic} roundedCircle />
        </Col>
        <Col md={8}>
          <h1>Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Other user data */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
