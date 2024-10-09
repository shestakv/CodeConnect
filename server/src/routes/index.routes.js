const apiRouter = require("express").Router();
const favoriteComapnyRouter = require("./favoriteCompany.routes");
const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const tokensRouter = require("./tokens.routes");
const stackRouter = require("./stack.routes");
const userStackRouter = require("./userStack.routes");
const testingResultRouter = require("./testingResult.routes");
const companiesRouter = require("./company.routes");
const userRouter = require("./user.routes");
const stackTasksRouter = require("./stackTask.routes");


apiRouter.use("/auth", authRouter);
apiRouter.use('/companies', companiesRouter);
apiRouter.use("/tokens", tokensRouter);
apiRouter.use('/favoritescompany', favoriteComapnyRouter);
apiRouter.use("/stack", stackRouter);
apiRouter.use("/userStack", userStackRouter);
apiRouter.use("/testingResult", testingResultRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/stackTasks", stackTasksRouter);

apiRouter.use("*", errorRouter);

module.exports = apiRouter;
