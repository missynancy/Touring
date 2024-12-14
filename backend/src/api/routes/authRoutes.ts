import { Router } from "express";
import { addSafariHandler } from "../controllers/authControllers"

const router = Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
export default router;
