const UserServices = require("../services/UserServices");
const bcrypt = require("bcrypt");
const generateTokens = require("../../src/utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");

exports.signUp = async (req, res) => {
  try {
    const {
      firstname,
      surname,
      patronymic,
      phone,
      email,
      password,
      cookingExp,
    } = req.body;
    if (firstname.trim() === "" || surname.trim() === "" || email.trim() === "" || password.trim() === "" || phone.trim() === "") {
      console.log("Заполни все поля!");
      return res.status(400).json({ message: "Заполни все поля!" });
    }
    let user = await UserServices.getUserByEmail(email);
    if (!user) {
      user = await UserServices.addUser({
        firstname,
        surname,
        phone,
        patronymic,
        email,
        password: await bcrypt.hash(password, 8),
        cookingExp,
      });

      delete user.password;
      res.locals.user = user;
      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        })
        .json({ user, accessToken });
      return;
    }
    res.status(400).json({ message: "Такой пользователь уже существует!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      console.log("Заполни все поля!");
      return;
    }
    const user = await UserServices.getUserByEmail(email);
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        delete user.password;
        res.locals.user = user;
        const { accessToken, refreshToken } = generateTokens({ user });
        res
          .status(200)
          .cookie(jwtConfig.refresh.type, refreshToken, {
            httpOnly: true,
            maxAge: jwtConfig.refresh.expiresIn,
          })
          .json({ user, accessToken });
        return;
      }
    }
    res.status(400).json({ message: "Почта или пароль введены неверно!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.locals.user = null;
    res
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "Успешный выход!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
