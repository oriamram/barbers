import mongoose from "mongoose";

/* Shop model */

const BusinessScheme = new mongoose.Schema({
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

const Business = mongoose.model("Business", BusinessScheme);
export default Business;
