import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/", protect, getUserProfile);

export default router;
