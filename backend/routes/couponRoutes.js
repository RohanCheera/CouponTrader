import express from 'express';
import {
  createCoupon,
  getCoupons,
  getActiveCoupons,
  getMyActiveCoupons,
  getInactiveCoupons,
  deleteCoupon,
  editCoupon,
  useCoupon
} from '../controllers/couponController.js';
import { protect } from '../middleware/authMiddleware.js'; // Middleware to check authentication

const router = express.Router();

// @desc    Create a coupon
// @route   POST /api/coupons
// @access  Private
router.post('/', protect, createCoupon);

// @desc    Get all coupons (for testing purposes)
// @route   GET /api/coupons
// @access  Private
router.get('/', protect, getCoupons);

// @desc    Get all active coupons
// @route   GET /api/coupons/active
// @access  Private
router.get('/active', protect, getActiveCoupons);

// @desc    Get active coupons of the authenticated user
// @route   GET /api/coupons/my-active
// @access  Private
router.get('/my-active', protect, getMyActiveCoupons);

// @desc    Get all not active coupons (expired or exhausted)
// @route   GET /api/coupons/inactive
// @access  Private
router.get('/inactive', protect, getInactiveCoupons);

// @desc    Delete a coupon
// @route   DELETE /api/coupons/:id
// @access  Private
router.delete('/:id', protect, deleteCoupon);

// @desc    Edit a coupon
// @route   PUT /api/coupons/:id
// @access  Private
router.put('/:id', protect, editCoupon);

// Example of using coupon (increment usage count)
// @desc    Use a coupon
// @route   POST /api/coupons/:id/use
// @access  Private
router.post('/:id/use', protect, useCoupon, (req, res) => {
  res.json({ message: 'Coupon used successfully' });
});

export default router;
