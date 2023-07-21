import User from "../models/User.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, config.secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const { name, surname, password, email } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ message: errors });

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 6);
      const user = new User({ email, password: hashPassword, surname, name });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      res.status(400).json({ message: "Ошибка регистрации" });
    }
  }
  async login(req, res) {
    try {
      const { name, email, password, surname } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь с таким ${email} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен неверный пароль" });
      }
      const token = generateAccessToken(user._id);
      return res.json(token);
    } catch (e) {
      res.status(400).json({ message: "Ошибка авторизации" });
    }
  }
  async getUsers(req, res) {
    try {
      console.log(res);
      res.json("Сервер работает");
    } catch (e) {
      res.status(400).json({ message: "Registrations failed" });
    }
  }
}

export default new authController();
