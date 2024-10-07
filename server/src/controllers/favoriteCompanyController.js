const FavoriteCompanyService = require('../services/FavoriteCompanyServices');


exports.addFavoriteCompany = async (req, res) => {
    const { userId, companyId } = req.body;
    if (!userId || !companyId) {
        return res.status(400).json({ error: "userId and companyId are required" });
    }

    try {
        const favorite = await FavoriteCompanyService.addFavoriteCompany(userId, companyId);
        return res.status(201).json(favorite);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.getAllFavoriteCompanies = async (req, res) => {
    const userId = res.locals.user.id;
    console.log(userId);
    
    try {
        const favorites = await FavoriteCompanyService.getAllFavoriteCompanies(userId);
        console.log(favorites);
        
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteFavoriteCompany = async (req, res) => {
    const { userId, companyId } = req.body;
    if (!userId || !companyId) {
        return res.status(400).json({ error: "userId and companyId are required" });
    }

    try {
        const isDeleted = await FavoriteCompanyService.deleteFavoriteCompany(userId, companyId);
        if (isDeleted) {
            return res.status(200).json({ message: "Favorite company deleted successfully" });
        } else {
            return res.status(404).json({ error: "Favorite company not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


