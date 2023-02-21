import mongoose from "mongoose";

const UserScheme = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			min: 3,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
		},
		phone: {
			type: String,
			required: true,
			min: 8,
			max: 11,
			unique: true,
		},
		gender: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserScheme);
export default User;
