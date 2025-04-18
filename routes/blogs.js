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

const upload = multer({ storage });
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/mine", protect, getMyBlogs);
router.get("/:id", getSingleBlog);
router.post("/", protect, upload.single("image"), createBlog);

export default router;
