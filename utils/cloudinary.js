import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogit",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

const uploadToCloudinary = (filePath) =>
  new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, { folder: "blogit" }, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });

export { storage, uploadToCloudinary };
