
const { FavoriteCompany } = require('../../db/models');

class FavoriteCompanyService {
    static async getAllFavoriteCompanies(userId) {
        console.log(userId);
        
        return await FavoriteCompany.findAll({ where: { userId } });
    }

    static async addFavoriteCompany(userId, companyId) {
        return await FavoriteCompany.create({ userId, companyId });
    }

    static async deleteFavoriteCompany(userId, companyId) {
        const favorite = await FavoriteCompany.findOne({ where: { userId, companyId } });
        if (favorite) {
            await favorite.destroy();
            return true;
        }
        return false;
    }
}

module.exports = FavoriteCompanyService;
