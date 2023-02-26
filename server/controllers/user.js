import User from "../models/User.js";

// Add - Remove favorite from a user
export const updateFavorites = async (req, res) => {
	try {
		const shopName = req.body.shopName;
		const phone = req.body.phone;
		const user = await User.findOne({ phone });
		if (!user.favorites.includes(shopName)) {
			await User.updateOne({ phone }, { $push: { favorites: shopName } });
		} else {
			await User.updateOne({ phone }, { $pull: { favorites: shopName } });
		}
	} catch (e) {
		console.log(e.message);
	}
};
