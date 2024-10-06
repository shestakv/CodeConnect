const { updateUser } = require("../controllers/userController");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const userRouter = require("express").Router();

userRouter.put("/",verifyAccessToken, updateUser);


module.exports = userRouter;