import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActiveCoupons, viewCoupon } from '../../actions/couponActions';
import { toggleCouponViewer } from '../../actions/uiActions';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AvailableCouponsPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const activeCoupons = useSelector(state => state.coupons.active);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchActiveCoupons());
    }
  }, [isLoggedIn, dispatch]);

  if (!isLoggedIn) {
    return <p>Please login to view available coupons.</p>;
  }

  return (
    <Container>
      <Row>
        {activeCoupons.map(coupon => (
          <Col key={coupon.id} md={4}>
            <Card onClick={() => {
              dispatch(viewCoupon(coupon));
              dispatch(toggleCouponViewer());
            }}>
              <Card.Body>
                <Card.Title>{coupon.title}</Card.Title>
                <Card.Text>{coupon.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AvailableCouponsPage;
