const { updateUser, getAllUsers, getUserById } = require("../controllers/userController");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const userRouter = require("express").Router();

userRouter.put("/", verifyAccessToken, updateUser).get("/", getAllUsers);

userRouter.get("/:id", getUserById);

module.exports = userRouter;
