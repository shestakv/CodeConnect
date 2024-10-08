export enum ROUTES {
  HOME = "/",
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  COMPANY = "/companies",
  FAVORITES_COMPANY = "/favoritescompany",
  USERS = "/users",
  USER_PERSONAL = "/users/:id",
  USER_STACKS = "/users/userStacks/:id",
  TESTS = "/tests/:userId/:stackId",
  ERROR = "*",
}
