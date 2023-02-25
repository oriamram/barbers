/* pulls and the user data from _auth_state cookie */

export const getAuthStateCookie = () => {
	const authStateCookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("_auth_state="));
	return authStateCookie ? JSON.parse(decodeURIComponent(authStateCookie.split("=")[1])) : null;
};

/* pulls the user token from the _auth cookie */

export const getTokenCookie = () => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; _auth=`);
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	}
};
