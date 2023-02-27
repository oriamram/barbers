import User from "../models/User.js";

// Add - Remove favorite from a user
export const updateFavorites = async (req, res) => {
	try {
		const businessName = req.body.businessName;
		const phone = req.body.phone;
		const user = await User.findOne({ phone });
		let isFavorite = false;
		let message = "Removed successfully";
		if (!user.favorites.includes(businessName)) {
			await User.updateOne({ phone }, { $push: { favorites: businessName } });
			isFavorite = true;
			message = "Added successfully";
			user.favorites.push(businessName);
		} else {
			await User.updateOne({ phone }, { $pull: { favorites: businessName } });
			user.favorites.splice(user.favorites.indexOf(businessName), 1);
		}
		res.status(201).json({ message, isFavorite, favorites: user.favorites });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

// Find by phone number
export const getUserByPhoneNumber = async (req, res) => {
	try {
		const user = await User.findOne({ phone: req.params.phone });
		user.password = undefined;
		res.status(200).json({ user });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
