const UserServices = require("../services/UserServices");

exports.updateUser = async (req, res) => {
  try {
    // const userId = req.user.userId;
    const { id } = res.locals.user;
    const { userData } = req.body;
    
    const updatedUser = await UserServices.updateUser( id, userData);

    if (!updatedUser) {
      res.status(404).json({ message: "Пользователь не найден" });
    }

    delete updatedUser.password;

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
