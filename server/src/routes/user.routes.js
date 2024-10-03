const { updateUser } = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.put("/updateUser", updateUser);


module.exports = userRouter;