const { User } = require("../db/models");

class UserServices {
  static async addUser({
    firstname,
    surname,
    patronymic,
    age,
    phone,
    email,
    location,
    bio,
    password,
    cookingExp,
  }) {
    try {
      const user = await User.create({
        firstname,
        surname,
        patronymic,
        age,
        phone,
        email,
        location,
        bio,
        password,
        cookingExp,
      });
      return user ? user.get() : null;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user ? user.get() : null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserServices;
