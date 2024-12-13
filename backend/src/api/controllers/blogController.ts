import { Request, Response } from "express";
import { addBlog, updateBlog, deleteBlog, getBlogsByUser, getAllBlogs } from "../models/Blog";

export const addBlogHandler = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const userId = req.session.userId;

    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    if (!title || !content) return res.status(400).json({ error: "Missing fields" });

    try {
        const blog = await addBlog(title, content, userId);
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
    if (!blogId || !title || !content) return res.status(400).json({ error: "Missing fields" });

    try {
        const updated = await updateBlog(blogId, title, content, userId);
        if (updated.count === 0) return res.status(404).json({ error: "Blog not found or not authorized" });

        res.json({ message: "Blog updated successfully" });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteBlogHandler = async (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id, 10);
    const userId = req.session.userId;

    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    if (!blogId) return res.status(400).json({ error: "Missing blog ID" });

    try {
        const deleted = await deleteBlog(blogId, userId);
        if (deleted.count === 0) return res.status(404).json({ error: "Blog not found or not authorized" });

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

