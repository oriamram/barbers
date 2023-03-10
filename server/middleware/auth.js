import jwt from "jsonwebtoken";

// Check for a connected user
export const verifyToken = async (req, res, next) => {
	try {
		let token = req.header("Authorization");
		if (!token) return res.status(403).send("Access Denied");
		if (token.startsWith("Bearer ")) {
			token = token.slice(7, token.length).trimLeft();
		}
		const varified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = varified;
		next();
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
};
