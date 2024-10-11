
const { FavoriteCompany } = require('../../db/models');

class FavoriteCompanyService {
    static async getAllFavoriteCompanies(userId) {
        return await FavoriteCompany.findAll({ where: { userId } });
    }

    static async addFavoriteCompany(userId, companyId) {
        return await FavoriteCompany.create({ userId, companyId });
    }

    static deleteFavoriteCompany = async (userId, companyId) => {
        try {  
            const favorite = await FavoriteCompany.destroy({ where: { userId, companyId } });
            return favorite;
      
        } catch ({ message }) {
          console.log(message);
        }
      };

}
module.exports = FavoriteCompanyService;
