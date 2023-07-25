import User from "../models/User.js";
import bcrypt from "bcrypt";
import mailService from "./mail.js";
import tokenService from "./token.js";
import DtoUser from "../dtos/user-dtos.js";
import { v4 as uuidv4 } from "uuid";
import UserDto from "../dtos/user-dtos.js";

class UserService {
  async registration(email, password, surname, name) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким email уже существует`);
    }

    const hashPassword = bcrypt.hashSync(password, 6); // Хэширование пароля

    const activationLink = uuidv4(); // Создание ссылки для активации пользователя
    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
      surname,
      name,
    }); // Создание пользователя в базу данных

    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/auth/activate/${activationLink}`
    // ); //Отсылаем письмо на почту

    const userDto = new DtoUser(user); // Использование данных о пользователе без пароля
    const tokens = tokenService.generateTokens({ ...userDto }); // Генерируем токены
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // Сохраняем refreshToken в базу данных

    return {
      ...tokens,
      user: userDto,
    };
  }
  async login(email, password) {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error(`Пользователь с таким ${email} не найден`);
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error(`Введен неверный пароль`);
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
  async refresh(refreshToken) {
    if (!refreshToken) throw new Error(`Пользователь не авторизован`);
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!tokenFromDb || !userData) {
      throw new Error(`Пользователь не авторизован`);
    }

    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
