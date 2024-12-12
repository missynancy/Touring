
import prisma from '../prismaClient.ts'


// Add a new blog
export const addBlog = async (title: string, content: string, authorId: number) => {
    return prisma.blog.create({
        data: { title, content, authorId },
    });
};

// Update a blog
export const updateBlog = async (blogId: number, title: string, content: string, authorId: number) => {
    return prisma.blog.updateMany({
        where: { id: blogId, authorId },
        data: { title, content },
    });
};

// Delete a blog
export const deleteBlog = async (blogId: number, authorId: number) => {
    return prisma.blog.deleteMany({
        where: { id: blogId, authorId },
    });
};

// Get blogs for a user
export const getBlogsByUser = async (authorId: number) => {
    return prisma.blog.findMany({
        where: { authorId },
        orderBy: { createdAt: "desc" },
    });
};

