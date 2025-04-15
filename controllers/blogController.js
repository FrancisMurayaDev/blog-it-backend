import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};
