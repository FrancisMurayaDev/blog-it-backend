import express from "express";
import { getAllBlogs, getMyBlogs, createBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/mine", protect, getMyBlogs);
router.post("/", protect, createBlog); // 👈 New route for blog creation

export default router;
