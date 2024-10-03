const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const tokensRouter = require("./tokens.routes");
const companiesRouter = require("./company.routes");

apiRouter.use("/auth", authRouter);
apiRouter.use('/companies', companiesRouter);
apiRouter.use("/tokens", tokensRouter);

apiRouter.use("*", errorRouter);

module.exports = apiRouter;
