import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: {
          select: { username: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

export const getMyBlogs = async (req, res) => {
  try {
    const userId = req.user.userId;
    const blogs = await prisma.blog.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: "desc" },
    });
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching user's blogs:", err);
    res.status(500).json({ message: "Failed to fetch user's blogs" });
  }
};

export const createBlog = async (req, res) => {
  const { title, excerpt, body } = req.body;

  try {
    const newBlog = await prisma.blog.create({
      data: {
        title,
        excerpt,
        body,
        image: req.file?.path || "",
        authorId: req.user.userId,
      },
    });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Failed to create blog" });
  }
};

export const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: parseInt(id) },
      include: {
        author: {
          select: { username: true, email: true },
        },
      },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
};
