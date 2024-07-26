import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ActiveCoupons from '../coupons/ActiveCoupons';
import ExpiredCoupons from '../coupons/ExpiredCoupons';
import CreateCoupon from '../coupons/CreateCoupon';

function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <Image src={user.pic} roundedCircle style={{ width: '150px' }} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>My Active Coupons</h3>
          <ActiveCoupons />
          <Link to="/active-coupons">
            <Button variant="primary">View More</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>My Expired Coupons</h3>
          <ExpiredCoupons />
          <Link to="/expired-coupons">
            <Button variant="secondary">View More</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <CreateCoupon />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
