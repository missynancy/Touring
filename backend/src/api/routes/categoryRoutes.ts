import { Router } from 'express';
import { getCategoryHandler, addCategoryHandler, deleteCategoryHandler } from '../controllers/categoryControllers';

const router = Router();

router.post("/delete/:id", deleteCategoryHandler);
router.post("/add", addCategoryHandler);
router.get("/all", getCategoryHandler);

export default router;
