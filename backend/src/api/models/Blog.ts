import prisma from '../prismaClient'


// Add a new blog
export const addBlog = async (title: string, content: string, authorId: number, image: string) => {
    return prisma.blog.create({
        data: { title, content, authorId, image },
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
export const deleteBlog = async (blogId: number) => {
    return prisma.blog.delete({
        where: { id: blogId},
    });
};

// Get blogs for a user
export const getBlogsByUser = async (authorId: number) => {
    return prisma.blog.findMany({
        where: { authorId },
        orderBy: { createdAt: "desc" },
    });
};

// Get all blogs 
export const getAllBlogs = async () => {
    return prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
    });
};

