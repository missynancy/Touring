import prisma from '../prismaClient'


// Add a new safari
export const addSafari = async (name: string, content: string, categoryId: number, image: string, lowSeason: string, peakSeason: string ) => {
    return prisma.safaris.create({
        data: {
      name, content, image, lowSeason, peakSeason, 
      category: {
        connect: { id: categoryId }, 
      },
    },
    });
};


// Update a safari
export const updateSafari = async (safariId: number, name: string, content: string, categoryId: number,  peakSeason: string, lowSeason: string, image: string) => {
    return prisma.safaris.updateMany({
        where: { id: safariId},
        data: { name, categoryId, peakSeason, lowSeason, image, content },
    });
};

// Delete a safari
export const deleteSafari = async (safariId: number) => {
    return prisma.safaris.delete({
        where: { id: safariId },
    });
};

// Get all safaris
export const getAllSafari = async () => {
    return prisma.safaris.findMany({
        orderBy: { createdAt: "desc" },
    });
};

export const getSafari = async (safariId: number ) => {
    return prisma.safaris.findUnique({
    where: { id: safariId}
    });
};
