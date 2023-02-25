import axios from "axios";

/* login func that loads the cookies to the client*/

export default async (values, signIn) => {
	const res = await axios.post("/auth/login", values);
	await signIn({
		token: res.data.token,
		expiresIn: 3600,
		authState: {
			fullName: res.data.user.fullName,
			email: res.data.user.email,
			phone: values.phone,
			gender: res.data.user.gender,
			favorites: res.data.user.favorites,
		},
	});
};
