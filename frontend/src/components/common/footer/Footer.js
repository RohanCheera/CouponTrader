import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col md={4} className="footer-column">
            <h4>CouponTrade</h4>
            <p>Exchange unused coupons for virtual currency and get great deals on your favorite products.</p>
            <p>Join our community and start trading today!</p>
          </Col>
          <Col md={2} className="footer-column">
            <h4>Quick Links</h4>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/create-task">Create Task</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={3} className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: info@coupontrade.com</p>
            <p>Phone: +1-234-567-8901</p>
            <h5>Follow Us</h5>
            <Nav className="social-links">
              <Nav.Item>
                <Nav.Link href="https://facebook.com" target="_blank">Facebook</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://twitter.com" target="_blank">Twitter</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://instagram.com" target="_blank">Instagram</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={3} className="footer-column">
            <h4>Subscribe</h4>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <FormControl type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary my-2" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} CouponTrade. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
