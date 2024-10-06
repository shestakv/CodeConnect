const { updateUser, getAllUsers, getUserById } = require("../controllers/userController");
const { getAllUserStacks } = require("../controllers/userStackController");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const userRouter = require("express").Router();

userRouter.put("/", verifyAccessToken, updateUser).get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.get("/userStacks/:userId", getAllUserStacks);

module.exports = userRouter;
