const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const tokensRouter = require("./tokens.routes");
const stackRouter = require("./stack.routes");
const userStackRouter = require("./userStack.routes");
const testingResultRouter = require("./testingResult.routes");

apiRouter.use("/auth", authRouter);
apiRouter.use("/tokens", tokensRouter);

apiRouter.use("/stack", stackRouter);
apiRouter.use("/userStack", userStackRouter);
apiRouter.use("/testingResult", testingResultRouter);

apiRouter.use("*", errorRouter);

module.exports = apiRouter;
