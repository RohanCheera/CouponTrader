import asyncHandler from 'express-async-handler';
import Coupon from '../models/couponModel.js';
import User from '../models/userModel.js';

// @desc    Create a coupon
// @route   POST /api/coupons
// @access  Private
const createCoupon = asyncHandler(async (req, res) => {
  const { title, description, category, code, active, expirationDate, usageLimit } = req.body;
  
  // Check for missing fields
  if (!title || !description || !category || !code || !expirationDate) {
    res.status(400);
    throw new Error('All fields are required');
  }

  // Check if coupon code already exists
  const couponExists = await Coupon.findOne({ code });
  if (couponExists) {
    res.status(400);
    throw new Error('Coupon code already exists');
  }

  // Create a new coupon
  const coupon = await Coupon.create({
    title,
    description,
    category,
    code,
    active,
    expirationDate,
    usageLimit,
    user: req.user._id, // Set the user who created the coupon
  });

  // Add coupon to user's list
  await User.findByIdAndUpdate(req.user._id, {
    $push: { coupons: coupon._id },
  });

  res.status(201).json(coupon);
});

// @desc    Get all coupons (for testing purposes)
// @route   GET /api/coupons
// @access  Private
const getCoupons = asyncHandler(async (req, res) => {
  const coupons = await Coupon.find({ user: req.user._id });
  res.json(coupons);
});



// @desc    Get all active coupons
// @route   GET /api/coupons/active
// @access  Private
const getActiveCoupons = asyncHandler(async (req, res) => {
  const currentDate = new Date();
  const activeCoupons = await Coupon.find({
    expirationDate: { $gt: currentDate },
    usageLimit: { $gt: 0 },
    active: true,
  }).populate('user', 'name'); // Populate user details if needed
  res.json(activeCoupons);
});

// @desc    Get active coupons of a user
// @route   GET /api/coupons/my-active
// @access  Private
const getMyActiveCoupons = asyncHandler(async (req, res) => {
  const currentDate = new Date();
  const activeCoupons = await Coupon.find({
    user: req.user._id,
    expirationDate: { $gt: currentDate },
    usageLimit: { $gt: 0 },
    active: true,
  });
  res.json(activeCoupons);
});

// @desc    Get not active coupons
// @route   GET /api/coupons/inactive
// @access  Private
const getInactiveCoupons = asyncHandler(async (req, res) => {
  const currentDate = new Date();
  const inactiveCoupons = await Coupon.find({
    $or: [
      { expirationDate: { $lte: currentDate } },
      { usageLimit: { $lte: 0 } },
      {active: false},
    ],
  });
  res.json(inactiveCoupons);
});

// @desc    Delete a coupon
// @route   DELETE /api/coupons/:id
// @access  Private
const deleteCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    res.status(404);
    throw new Error('Coupon not found');
  }

  await Coupon.findByIdAndDelete(req.params.id);
  res.json({ message: 'Coupon removed' });
});


// @desc    Edit a coupon
// @route   PUT /api/coupons/:id
// @access  Private
const editCoupon = asyncHandler(async (req, res) => {
  const { title, description, category, code, expirationDate, usageLimit } = req.body;

  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    res.status(404);
    throw new Error('Coupon not found');
  }

  coupon.title = title;
  coupon.description = description;
  coupon.category = category;
  coupon.code = code;
  coupon.expirationDate = expirationDate;
  coupon.usageLimit = usageLimit;

  const updatedCoupon = await coupon.save();
  res.json(updatedCoupon);
});

// Middleware to handle coupon usage
const useCoupon = asyncHandler(async (req, res, next) => {
  const couponId = req.params.id;
  const user = req.user;

  const coupon = await Coupon.findById(couponId);

  if (!coupon) {
    res.status(404);
    throw new Error('Coupon not found');
  }

  if (coupon.expirationDate <= new Date() || coupon.usageCount >= coupon.usageLimit) {
    coupon.active=false;
    res.status(400);
    throw new Error('Coupon is expired or exhausted');
  }

  // Simulate coupon usage (increment usage count)
  coupon.usageCount += 1;
  await coupon.save();

  next(); // Move to the next middleware or route handler
});

export {
  createCoupon,
  getCoupons,
  getActiveCoupons,
  getMyActiveCoupons,
  getInactiveCoupons,
  deleteCoupon,
  editCoupon,
  useCoupon,
};


