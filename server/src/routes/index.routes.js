const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const tokensRouter = require("./tokens.routes");
const stackRouter = require("./stack.routes");
const userStackRouter = require("./userStack.routes");
const testingResultRouter = require("./testingResult.routes");
const companiesRouter = require("./company.routes");
const userRouter = require("./user.routes");

apiRouter.use("/auth", authRouter);
apiRouter.use('/companies', companiesRouter);
apiRouter.use("/tokens", tokensRouter);

apiRouter.use("/stack", stackRouter);
apiRouter.use("/userStack", userStackRouter);
apiRouter.use("/testingResult", testingResultRouter);
apiRouter.use("/user", userRouter);

apiRouter.use("*", errorRouter);

module.exports = apiRouter;
