import React, { useEffect, useState } from "react";
import { Avatar, Grid, CircularProgress } from "@mui/material";
import { getAuthStateCookie, getTokenCookie } from "../../../funcs/getAuthCookies.js";

const Profile = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const getCookies = setInterval(() => {
			let authStateCookie = getAuthStateCookie();
			if (authStateCookie) {
				setUserData(authStateCookie);
				clearInterval(getCookies);
			}
		}, 1000);
	}, []);

	return (
		<>
			{userData ? (
				<Grid container padding={"20px 40px"}>
					<Grid item mobile={12} display={"flex"} justifyContent={"center"}>
						<Avatar sx={{ width: "100px", height: "100px", fontSize: "4rem" }}>{userData?.fullName.slice(0, 1).toUpperCase()}</Avatar>
					</Grid>
				</Grid>
			) : (
				<CircularProgress />
			)}
		</>
	);
};

export default Profile;
