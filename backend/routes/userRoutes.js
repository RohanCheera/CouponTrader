import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
  logoutUser
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/",registerUser);
router.post("/login", authUser);
router.post('/logout', logoutUser); 
router.route("/profile").post(protect, updateUserProfile);

export default router;