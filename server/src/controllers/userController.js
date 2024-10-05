const verifyAccessToken = require("../middleware/verifyAccessToken");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const UserServices = require("../services/UserServices");

exports.updateUser = [
  async (req, res) => {
    try {
      // const userId = req.user.userId;
      // const { id } = res.locals.user;
      const { userData } = req.body;
      console.log(req.body);

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
  verifyAccessToken,
];
