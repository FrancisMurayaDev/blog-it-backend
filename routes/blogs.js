import express from "express";
import { getAllBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);

export default router;
