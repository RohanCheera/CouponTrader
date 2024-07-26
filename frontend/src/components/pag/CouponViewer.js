import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCouponViewer } from '../../actions/uiActions';
import { Modal, Button } from 'react-bootstrap';

const CouponViewer = () => {
  const viewedCoupon = useSelector(state => state.coupons.viewedCoupon);
  const isCouponViewerOpen = useSelector(state => state.ui.isCouponViewerOpen);
  const dispatch = useDispatch();

  if (!isCouponViewerOpen || !viewedCoupon) {
    return null;
  }

  return (
    <Modal show={isCouponViewerOpen} onHide={() => dispatch(toggleCouponViewer())}>
      <Modal.Header closeButton>
        <Modal.Title>{viewedCoupon.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{viewedCoupon.description}</p>
        {/* Other coupon details */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(toggleCouponViewer())}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CouponViewer;
