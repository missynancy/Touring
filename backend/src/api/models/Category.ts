import prisma from '../prismaClient'


// add category
export const addCategory = async (name: string) => {
    return prisma.category.create({
    data:{
      name
    }
    });
};

export const deleteCategory = async (categoryId: number) => {
    return prisma.category.delete({
    where: {
      id: categoryId
    }
    });

};

// Get all categories
export const getCategories = async () => {
    return prisma.category.findMany();
};
