import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import blogRoutes from "./routes/blogs.js";
import profileRoutes from "./routes/profile.js";


dotenv.config();

const app = express();

app.use("/api/profile", profileRoutes);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api", protectedRoutes);

app.get("/", (req, res) => {
  res.send("BlogIt API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
