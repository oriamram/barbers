import Shop from "../models/Shop.js";

export const newShop = async (req, res) => {
	try {
		const { name, genders, summary, image, rating, city, address, phone } = req.body;
		const newShop = new Shop({
			name,
			genders,
			summary,
			image,
			rating,
			city,
			address,
			phone,
		});
		const savedShop = await newShop.save();
		res.status(201).json(savedShop);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

export const allShops = async (req, res) => {
	try {
		const shops = await Shop.find();
		res.status(201).json(shops);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
