
import { Router } from "express";
import { addSafariHandler } from "../controllers/safariControllers";

import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/add", upload.single("image1"), addSafariHandler);
export default router;
