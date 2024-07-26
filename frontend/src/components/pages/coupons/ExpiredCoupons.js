import React from 'react';
import { ListGroup } from 'react-bootstrap';

function ExpiredCoupons() {
  const expiredCoupons = [
    { id: 1, description: '20% off on clothing' },
    { id: 2, description: 'Free shipping on orders over $50' },
    // Add more expired coupons as needed
  ];

  return (
    <ListGroup>
      {expiredCoupons.map(coupon => (
        <ListGroup.Item key={coupon.id}>{coupon.description}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ExpiredCoupons;
