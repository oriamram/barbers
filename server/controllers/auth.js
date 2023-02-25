import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER */

export const register = async (req, res) => {
	try {
		const { fullName, email, password, phone, gender } = req.body;
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);
		const newUser = new User({
			fullName,
			email,
			password: passwordHash,
			phone,
			gender,
			favorites: [],
		});
		const savedUser = await newUser.save();
		savedUser.password = undefined;
		res.status(201).json(savedUser);
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};

/* LOGGING IN */

export const login = async (req, res) => {
	try {
		const { phone, password } = req.body;
		const user = await User.findOne({ phone });
		if (!user) return res.status(400).json({ msg: "Wrong phone number" });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		user.password = undefined;
		res.status(200).json({ token, user });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
