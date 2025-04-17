import express from "express";
import {
  getAllBlogs,
  getMyBlogs,
  createBlog,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getSingleBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/mine", protect, getMyBlogs);
router.post("/", protect, createBlog); 
router.get("/:id", getSingleBlog);

export default router;
