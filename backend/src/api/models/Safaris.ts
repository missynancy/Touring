import prisma from '../prismaClient'


// Add a new safari
export const addSafari = async (title: string, content: string, categoryId: number, image1: bytes, lowSeason: string, peakSeason: string ) => {
    return prisma.safaris.create({
        data: { name, content, image1, categoryId, lowSeason, peakSeason},
    });
};


// Update a safari
export const updateSafari = async (safariId: number, name: string, content: string, peakSeason: string, lowSeason: string, image1: bytes) => {
    return prisma.safaris.updateMany({
        where: { id: safariId},
        data: { , content },
    });
};

// Delete a safari
export const deleteSafari = async (safariId: number) => {
    return prisma.safaris.deleteMany({
        where: { id: blogId, authorId },
    });
};

// Get all safaris
export const getAllSafari = async () => {
    return prisma.safaris.findMany({
        orderBy: { createdAt: "desc" },
    });
};

export const getSafari = async (safariId: number ) => {
    return prisma.safaris.findMany({
    where: { id: safariId}
    });
};
