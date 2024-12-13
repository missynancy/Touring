import prisma from "../prismaClient";

// Add a user
export const addUser = async (username: string, password: string, email: string ): Promise<{ id: number; username: string, email: string } | null> => {
    try {
        const newUser = await prisma.user.create({
            data: { username, password, email },
        });
        return { id: newUser.id, username: newUser.username, email: newUser.email };
    } catch (error) {
        console.error("Error adding user:", error);
        return null;
    }
};

// Find a user by username
export const findUserByUsername = async (username: string): Promise<{ id: number; username: string; password: string } | null> => {
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });
        return user ? { id: user.id, username: user.username, password: user.password } : null;

    } catch (error) {
        console.error("Error finding user:", error);
        return null;
    }
};
