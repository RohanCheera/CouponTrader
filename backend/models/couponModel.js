import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true, // Ensure coupon code is unique
    },
    active:{
      type: Boolean,
      default: true,
    },
    expirationDate: {
      type: Date,
      required: true, // Ensure coupons have an expiration date
    },
    usageLimit: {
      type: Number,
      default: 1, // Optional: limit the number of times a coupon can be used
    },
    usedCount: {
      type: Number,
      default: 0, // Track how many times a coupon has been used
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Reference to the user who created the coupon
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
