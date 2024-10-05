const { updateUser, getAllUsers, getUserById } = require("../controllers/userController");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { upload } = require("../utils/upload");
const userRouter = require("express").Router();


userRouter.put("/",verifyAccessToken, upload.single("avatar"),  updateUser).get("/", getAllUsers);

userRouter.get("/:id", getUserById)

module.exports = userRouter;
