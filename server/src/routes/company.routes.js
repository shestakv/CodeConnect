const router = require("express").Router();
const companyController = require('../controllers/companyController')
const verifyAccessToken = require("../middleware/verifyAccessToken");


router.route('/')
    .get(companyController.getAllCompanies)
    .post(verifyAccessToken, companyController.createCompany)

router
  .route('/:id')
    .get(companyController.getCompanyById)
    .put(verifyAccessToken, companyController.updateCompanyId)
    .delete(verifyAccessToken, companyController.deleteCompany)

module.exports = router;