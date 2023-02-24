import React, { useEffect, useState } from "react";
import { Avatar, Grid, CircularProgress, Typography, styled, Box } from "@mui/material";
import { getAuthStateCookie } from "../../../funcs/getAuthCookies.js";

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		fontSize: "1.5rem",
		fontWeight: 500,
	},
	[theme.breakpoints.up("tablet")]: {
		fontSize: "4rem",
		fontWeight: 500,
	},
}));

const Profile = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		let authStateCookie = getAuthStateCookie();
		if (!authStateCookie) {
			const getCookies = setInterval(() => {
				authStateCookie = getAuthStateCookie();
				if (authStateCookie) {
					setUserData(authStateCookie);
					clearInterval(getCookies);
				}
			}, 1000);
		} else {
			setUserData(authStateCookie);
		}
	}, []);

	return (
		<>
			{userData ? (
				<Grid container direction={"column"} m={0} gap={2} sx={{ backgroundColor: "secondary.main", height: "100vh" }}>
					<Grid item display={"flex"} justifyContent={"center"} mt={3}>
						<Avatar sx={{ width: "100px", height: "100px", fontSize: "4rem" }}>{userData?.fullName.slice(0, 1).toUpperCase()}</Avatar>
					</Grid>
					<Grid item display={"flex"} justifyContent={"center"}>
						<StyledTypography variant="h1">{userData?.fullName}</StyledTypography>
					</Grid>
				</Grid>
			) : (
				<CircularProgress />
			)}
		</>
	);
};

export default Profile;
