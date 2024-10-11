const router = require("express").Router();
const favoriteCompanyController = require('../controllers/favoriteCompanyController');
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.route('/')
    .get(verifyAccessToken, favoriteCompanyController.getAllFavoriteCompanies)
    .post(verifyAccessToken, favoriteCompanyController.addFavoriteCompany);

router.route('/')
    .delete(verifyAccessToken, favoriteCompanyController.deleteFavoriteCompany);

module.exports = router;
