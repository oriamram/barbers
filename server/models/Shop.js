import mongoose from "mongoose";

/* Shop model */

const ShopScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 30,
	},
	genders: {
		type: Array,
		required: true,
	},
	summary: {
		type: String,
		required: false,
		max: 300,
	},
	image: {
		type: String,
	},
	rating: {
		type: Number,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: false,
	},
});

const Shop = mongoose.model("Shop", ShopScheme);
export default Shop;
