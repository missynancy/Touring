import { Request, Response } from "express";
import { addBlog, updateBlog, deleteBlog, getBlogsByUser, getAllBlogs } from "../models/Blog";
import path from "path";

export const addBlogHandler = async (req: Request, res: Response) => {
    const { title, content, image } = req.body;
    const userId = req.session.userId;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const imageUrl = req.file ? path.join("uploads", req.file.filename) : "default-image.png";

    try {
        const blog = await addBlog(title, content, userId, imageUrl);
        res.status(201).json({ message: "Blog created successfully", blog });
    } catch (error) {
        console.error("Error adding blog:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateBlogHandler = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const blogId = parseInt(req.params.id, 10);
    const userId = req.session.userId;

    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const imageUrl = req.file ? path.join("uploads", req.file.filename) : "default-image.png";
    try {
        const updated = await updateBlog(blogId, title, content, userId);

        res.json({ message: "Blog updated successfully" });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteBlogHandler = async (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id, 10);
    const userId = req.session.userId;

    try {
        const deleted = await deleteBlog(blogId);

        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getUserBlogsHandler = async (req: Request, res: Response) => {
    const userId = req.session.userId;

    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    try {
        const blogs = await getBlogsByUser(userId);
        res.json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllBlogsHandler = async (req: Request, res: Response) => {

    try {
        const blogs = await getAllBlogs();
        res.json(blogs);

    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

