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
      console.log(userId);
      
      const [updatedRowsCount, [updateUser]] = await User.update(updatedData, {
        where: { id: userId },
        returning: true,})
        return updatedRowsCount > 0 ? updateUser.get() : null;
      } catch (error) {
        throw new Error(error);
      }
  }
}

module.exports = UserServices;
