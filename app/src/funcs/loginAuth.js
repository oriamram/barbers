import { useSignIn } from "react-auth-kit";
import axios from "axios";

export default async (values, signIn) => {
	const res = await axios.post("/auth/login", values);
	await signIn({
		token: res.data.token,
		expiresIn: 3600,
		authState: {
			phone: values.phone,
			email: res.data.user.email,
			gender: res.data.user.gender,
			fullName: res.data.user.fullName,
		},
	});
};
