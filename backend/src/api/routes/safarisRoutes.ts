
import { Router } from "express";
import { addSafariHandler, getAllSafariHandler, updateSafariHandler, getSafariHandler, deleteSafariHandler} from "../controllers/safariControllers";
import multer from 'multer';
import path from "path";

// Configure Multer for storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads/")); // Store images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = Router();

router.post("/add", upload.single("image"), addSafariHandler);
router.post("/update", upload.single("image"), updateSafariHandler);
router.post("/delete/:id", deleteSafariHandler);
router.get("/:id", getSafariHandler);
router.get("/all", getAllSafariHandler);
export default router;
