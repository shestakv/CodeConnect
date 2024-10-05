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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserServices.getAllUsers(req.query);
    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
}

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getUserById(id);
    if (user) {
      res.status(200).json({ message: "success", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
