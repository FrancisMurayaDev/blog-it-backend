import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
  changePassword,
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/", protect, getUserProfile);
router.put("/", protect, updateUserProfile);
router.put("/password", protect, changePassword);

export default router;
