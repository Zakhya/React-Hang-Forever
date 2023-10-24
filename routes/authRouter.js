import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  vlaidateLoginInput,
  vlaidateRgeisterInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/register", vlaidateRgeisterInput, register);
router.post("/login", vlaidateLoginInput, login);
router.get("/logout", logout);

export default router;
