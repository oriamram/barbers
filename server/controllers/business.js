import Business from "../models/Business.js";

export const newBusiness = async (req, res) => {
	try {
		const { name, genders, summary, image, rating, city, address, phone } = req.body;
		const newBusiness = new Business({
			name,
			genders,
			summary,
			image,
			rating,
			city,
			address,
			phone,
		});
		const savedBusiness = await newBusiness.save();
		res.status(201).json(savedBusiness);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

export const allBusinesses = async (req, res) => {
	try {
		const businesses = await Business.find();
		res.status(201).json(businesses);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
