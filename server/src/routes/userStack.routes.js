const router = require("express").Router();
const userStackController = require('../controllers/userStackController')
const verifyAccessToken = require("../middleware/verifyAccessToken");


router.route('/')
    .get(userStackController.getAllUserStacks)
    .post(verifyAccessToken, userStackController.createUserStack)

router
  .route('/:id')
    .get(userStackController.getUserStackById)
    .delete(verifyAccessToken, userStackController.deleteUserStack)

module.exports = router;