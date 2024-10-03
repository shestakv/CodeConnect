const UserServices = require("../services/UserServices");

exports.updateUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { education } = req.body;
    console.log(education);

    const updatedUser = await UserServices.updateUser(userId, updatedData);

    if (!updatedUser) {
      res.status(404).json({ message: "Пользователь не найден" });
    }

    delete updatedUser.password;

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
