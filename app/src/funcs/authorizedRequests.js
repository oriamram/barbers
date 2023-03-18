import api from "./axios";
import { getTokenCookie } from "./getAuthCookies";

/* sending a request to server with built in auth header */

// post
export const post = async (path, body) => {
	return await api.post(path, body, {
		headers: {
			Authorization: `Bearer ${getTokenCookie()}`,
		},
	});
};

// get
export const get = async (path) => {
	return (
		await api.get(path, {
			headers: {
				Authorization: `Bearer ${getTokenCookie()}`,
			},
		})
	).data;
};
