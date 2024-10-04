const { User } = require("../../db/models");

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

  static async updateUser(userId, updateData) {
    try {
      await User.update(updateData, {
        where: { id: userId },
      });
      const user = await User.findByPk(userId);

      // console.log(user, 111111111112222222222222);

      //  await user.update(updateData)

      return user ? user.get() : null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserServices;
