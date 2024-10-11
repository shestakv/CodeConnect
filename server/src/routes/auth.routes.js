const {
  signUp,
  signIn,
  logout,
} = require("../controllers/authController");

const authRouter = require("express").Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.delete("/logout", logout);

module.exports = authRouter;
