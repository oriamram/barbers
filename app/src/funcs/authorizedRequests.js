import axios from "axios";
import { getTokenCookie } from "./getAuthCookies";

export const post = async (path, body) => {
	return await axios.post(path, body, {
		headers: {
			Authorization: `Bearer ${getTokenCookie()}`,
		},
	});
};
