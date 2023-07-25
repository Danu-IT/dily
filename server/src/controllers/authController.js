import { validationResult } from "express-validator";
import userService from "../services/user.js";

class authController {
  async registration(req, res, next) {
    try {
      const { name, surname, password, email } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) return res.status(400).json({ message: errors });

      const userData = await userService.registration(
        email,
        password,
        surname,
        name
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
  async login(req, res, next) {
    try {
      const { email, password, surname, name } = req.body;
      const userData = await userService.login(email, password, surname, name);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json({ message: "Вы успешно вышли из аккаунта" });
    } catch (e) {
      res.status(400).json({ message: "Ошибка выхода из аккаунта" });
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      res.status(400).json({ message: "Registrations failed" });
    }
  }
  async activate(req, res, next) {
    try {
      console.log(res);
    } catch (e) {
      res.status(400).json({ message: "Registrations failed" });
    }
  }
  async getUsers(req, res, next) {
    try {
      res.json("Сервер работает");
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
}

export default new authController();
