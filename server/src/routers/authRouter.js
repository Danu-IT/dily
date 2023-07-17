import Router from "express";
import controller from "../controllers/authController.js";
import { check } from "express-validator";

const router = new Router();

router.post(
  "/registraition",
  [
    check("name", "Имя не может быть пустым").notEmpty(),
    check("surname", "Фамилия не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 15 символов"
    ).isLength({ min: 4, max: 15 }),
    check("email", "Email не может быть пустым").notEmpty().isEmail(),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

export default router;
