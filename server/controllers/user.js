import User from "../models/User.js";

// Add - Remove favorite from a user
export const updateFavorites = async (req, res) => {
	try {
		const shopName = req.body.shopName;
		const phone = req.body.phone;
		const user = await User.findOne({ phone });
		if (!user.favorites.includes(shopName)) {
			await User.updateOne({ phone }, { $push: { favorites: shopName } });
			res.status(201).json({ message: "Added successfully", isFavorite: true });
		} else {
			await User.updateOne({ phone }, { $pull: { favorites: shopName } });
			res.status(201).json({ message: "Removed successfully", isFavorite: false });
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
