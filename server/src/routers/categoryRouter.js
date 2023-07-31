import { Router } from "express";
import controller from "../controllers/categoryController.js";

const router = new Router();

router.get("/", controller.getItems);
router.post("/upload", controller.uploadFileItem);

export default router;
