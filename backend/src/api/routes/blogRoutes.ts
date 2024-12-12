import { Router } from "express";
import {
    addBlogHandler,
    updateBlogHandler,
    deleteBlogHandler,
    getUserBlogsHandler,
} from "../controllers/blogController";
import { isAuthenticated } from "../../middlewares";

const router = Router();

router.post("/", isAuthenticated, addBlogHandler); // Create a new blog
router.put("/:id", isAuthenticated, updateBlogHandler); // Update a blog
router.delete("/:id", isAuthenticated, deleteBlogHandler); // Delete a blog
router.get("/", isAuthenticated, getUserBlogsHandler); // Get all blogs for logged-in user

export default router;

