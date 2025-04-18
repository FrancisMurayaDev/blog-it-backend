import express from "express";
import {
  getAllBlogs,
  getMyBlogs,
  createBlog,
  getSingleBlog,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import { storage } from "../utils/cloudinary.js";

const router = express.Router();
const upload = multer({ storage });

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);

router.get("/mine", protect, getMyBlogs);
router.post("/", protect, upload.single("image"), createBlog);

export default router;
