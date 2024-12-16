import { Router } from "express";
import {
    addBlogHandler,
    updateBlogHandler,
    deleteBlogHandler,
    getUserBlogsHandler,
    getAllBlogsHandler,
} from "../controllers/blogController";
import { isAuthenticated } from "../../middlewares";
import multer from 'multer';
import path from "path";

// Configure Multer for storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads/")); // Store images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = Router();

router.post("/", isAuthenticated, addBlogHandler); // Create a new blog
router.put("/:id", isAuthenticated, updateBlogHandler); // Update a blog
router.delete("/:id", isAuthenticated, deleteBlogHandler); // Delete a blog
router.get("/", isAuthenticated, getUserBlogsHandler); // Get all blogs for logged-in user
router.get("/all", getAllBlogsHandler);
export default router;

