import Router from "express";
import controller from "../controllers/authController.js";

const router = new Router();

router.post("/registraition", controller.registration);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

export default router;
