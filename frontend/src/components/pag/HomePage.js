import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome to Coupon Trading Platform!</Card.Title>
          <Card.Text>
            Discover and exchange coupons with ease. Whether you're looking for a discount on your favorite products or have unused coupons to trade, our platform makes it simple and rewarding.
          </Card.Text>
          <Button as={Link} to="/available-coupons" variant="primary">
            Explore Coupons
          </Button>
        </Card.Body>
      </Card>

      <Row className="mt-4">
        <Col md={4}>
          <div className="text-center">
            <h2>Easy Access</h2>
            <p>Find and use active coupons easily with just a few clicks.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <h2>Trade Coupons</h2>
            <p>Exchange unused coupons for virtual currency or other discounts.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <h2>Manage Profile</h2>
            <p>View and update your profile information and track your coupon usage.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
