const { getAllUserStacks } = require("../controllers/userStackController");
const { updateUser, getAllUsers, getUserById, updateAvatarUser } = require("../controllers/userController");

const verifyAccessToken = require("../middleware/verifyAccessToken");
const { upload } = require("../utils/upload");
const userRouter = require("express").Router();


userRouter
  .put("/avatar", verifyAccessToken, upload.single("avatar"), updateAvatarUser)
  .put("/", verifyAccessToken, updateUser)
  .get("/", getAllUsers);

userRouter.get("/:id", getUserById)

userRouter.get("/userStacks/:userId", getAllUserStacks);

module.exports = userRouter;
