import { Request, Response } from "express";
import { addCategory, deleteCategory, getCategories} from "../models/Category";


export const addCategoryHandler = async (req: Request, res: Response) => {

  const { name } = req.body;
  try{
  const newCategory = await addCategory(name);
  res.status(200).json(newCategory);
  } catch(error){
    res.status(500).json({error: error, message: "failed to add category"})
  };
};


export const deleteCategoryHandler = async (req: Request, res: Response) => {

  const categoryId  = parseInt(req.params.id, 10);
  try{
  const category = await deleteCategory(categoryId);
  res.status(200).json(category);

  } catch(error){
    res.status(500).json({error: error, message: "failed to delete category"})
  };
};

export const getCategoryHandler = async (req: Request, res: Response) => {

  try{
  const categories= await getCategories();
  res.send(200).json(categories)
  } catch(error){
    res.status(500).json({error: error, message: "failed to get categories"})
  };
};
