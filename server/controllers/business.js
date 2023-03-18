import Business from "../models/Business.js";

// creates new business in db
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

// return all the businesses
export const businesses = async (req, res) => {
	try {
		const businesses = await Business.find().skip(req.query.skip).limit(req.query.limit);
		res.status(201).json(businesses);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

// return all the businesses by input
export const businessesByNames = async (req, res) => {
	try {
		const favorites = req.query.favorites;
		const businesses = await Business.find({ name: { $in: favorites } })
			.skip(req.query.skip)
			.limit(req.query.limit);
		res.status(201).send(businesses);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

export const getCount = async (req, res) => {
	try {
		const count = await Business.countDocuments({});
		res.status(200).send({ count });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
