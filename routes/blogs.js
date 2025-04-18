import express from "express";
import {
  getAllBlogs,
  getMyBlogs,
  createBlog,
  getSingleBlog,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);


router.get("/mine", protect, getMyBlogs);
router.post("/", protect, createBlog);

export default router;
