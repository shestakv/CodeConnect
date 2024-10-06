const router = require("express").Router();
const userStackController = require('../controllers/userStackController')
const verifyAccessToken = require("../middleware/verifyAccessToken");


router.route('/')
    // .get(verifyAccessToken, userStackController.getAllUserStacks)
    .post(verifyAccessToken, userStackController.createUserStack)

router
  .route('/:id')
    .get(verifyAccessToken, userStackController.getAllUserStacks)
    .delete(verifyAccessToken, userStackController.deleteUserStack)

module.exports = router;