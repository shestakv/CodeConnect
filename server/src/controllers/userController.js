const verifyAccessToken = require("../middleware/verifyAccessToken");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const UserServices = require("../services/UserServices");
const { processImages } = require("../utils/upload");

exports.updateUser = async (req, res) => {
    try {
      // const userId = req.user.userId;
      // const { id } = res.locals.user;
      const { userData } = req.body;
      console.log(req.file);

      // const pathImages = await processImages(req.file.buffer);
      const user = await UserServices.updateUser(
        res.locals.user.id,
        // pathImages,
        // id,
        userData
      );
      if (!user) {
        res.status(404).json({ message: "Пользователь не найден" });
      }

      delete user.password;

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

exports.updateAvatarUser = async (req, res) => {
  try {
    const userId = res.locals.user.id;

    if (req.file) {
      const avatarPath = await processImages(req.file.buffer);
      const user = await UserServices.updateUser(userId, {
        avatar: `/images/${avatarPath}`,
      });

      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      delete user.password;
      return res.status(200).json({ user });
    } else {
      return res.status(400).json({ message: "Файл не был загружен." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
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
