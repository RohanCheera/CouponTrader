import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchActiveCoupons } from '../../../thunks/couponThunks';

function ActiveCoupons() {
  const dispatch = useDispatch();
  const activeCoupons = useSelector((state) => state.coupons.activeCoupons);
  const couponStatus = useSelector((state) => state.coupons.status);
  const error = useSelector((state) => state.coupons.error);

  useEffect(() => {
    if (couponStatus === 'idle') {
      dispatch(fetchActiveCoupons());
    }
  }, [couponStatus, dispatch]);

  let content;

  if (couponStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (couponStatus === 'succeeded') {
    content = (
      <Row>
        {activeCoupons.length > 0 ? (
          activeCoupons.map((coupon) => (
            <Col md={3} key={coupon._id}>
              <Card className="coupon-card">
                <Card.Body>
                  <Card.Title>{coupon.title}</Card.Title>
                  <Card.Text>{coupon.description}</Card.Text>
                  <Card.Text>Category: {coupon.category}</Card.Text>
                  <Card.Text>Expires on: {coupon.expirationDate}</Card.Text>
                  <Button variant="success" as={Link} to={`/coupons/${coupon._id}`}>View Coupon</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h1>No Coupons available</h1>
        )}
      </Row>
    );
  } else if (couponStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
}

export default ActiveCoupons;
