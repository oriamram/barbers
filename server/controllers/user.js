import User from "../models/User.js";

export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

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
		console.log("no shop id");
	}
};
