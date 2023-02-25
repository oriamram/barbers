import axios from "axios";
import { getTokenCookie } from "./getAuthCookies";

/* sending a request to server with built in auth header */

export const post = async (path, body) => {
	return await axios.post(path, body, {
		headers: {
			Authorization: `Bearer ${getTokenCookie()}`,
		},
	});
};
