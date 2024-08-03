import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import ImageSlider from '../homecomps/ImageSlider';

function Home() {
  return (
    <div className="home">
      <ImageSlider/>
      <Container>
        <Row className="hero-section">
          <Col md={12} className="text-center">
            <h1>Welcome to Coupon Wallet</h1>
            <p>Your one-stop solution for managing and trading coupons effortlessly.</p>
            <Button as={Link} to="/register" variant="primary" size="lg">Get Started</Button>
          </Col>
        </Row>
        
        <Row className="featured-coupons-section">
          <Col md={12}>
            <h2>Featured Coupons</h2>
            <Row>
              <Col md={3}>
                <Card className="coupon-card">
                  <Card.Body>
                    <Card.Title>10% Off on Electronics</Card.Title>
                    <Card.Text>Valid until: 31st Dec 2024</Card.Text>
                    <Button variant="success" as={Link} to="/coupons/1">View Coupon</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="coupon-card">
                  <Card.Body>
                    <Card.Title>$5 Off on Groceries</Card.Title>
                    <Card.Text>Valid until: 15th Nov 2024</Card.Text>
                    <Button variant="success" as={Link} to="/coupons/2">View Coupon</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="coupon-card">
                  <Card.Body>
                    <Card.Title>Free Shipping on Orders Over $50</Card.Title>
                    <Card.Text>Valid until: 1st Jan 2025</Card.Text>
                    <Button variant="success" as={Link} to="/coupons/3">View Coupon</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="coupon-card">
                  <Card.Body>
                    <Card.Title>10% Off on Electronics</Card.Title>
                    <Card.Text>Valid until: 31st Dec 2024</Card.Text>
                    <Button variant="success" as={Link} to="/coupons/1">View Coupon</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="benefits-section">
          <Col md={12}>
            <h3 className='text-center py-3 '>Why to use coupon wellet ?</h3>
            <Row>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Save Money</h4>
                  <p>Get exclusive deals and discounts on your favorite products.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Trade Easily</h4>
                  <p>Exchange unused coupons for virtual currency and never let a coupon go to waste.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Stay Organized</h4>
                  <p>Keep track of all your coupons in one convenient place.</p>
                </div>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
