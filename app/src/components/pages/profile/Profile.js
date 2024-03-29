import React, { useContext, useEffect } from "react";
import { Avatar, Grid, CircularProgress, Typography, styled, Box } from "@mui/material";
import { userDataContext } from "../../../App.js";
import { get } from "../../../funcs/authorizedRequests.js";
import { getAuthStateCookie } from "../../../funcs/getAuthCookies.js";
import BusinessCard from "../../businessCard/BusinessCard.js";
import SignOut from "../../auths/SignOut.js";

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

/* Profile page */

const Profile = ({ favorites }) => {
	const [userData, setUserData] = useContext(userDataContext);

	useEffect(() => {
		let tempUserData = getAuthStateCookie();
		if (!tempUserData) {
			(async () => {
				if (!tempUserData) {
					const intervalId = setInterval(async () => {
						tempUserData = getAuthStateCookie();
						if (tempUserData) {
							const res = await get(`/user/${tempUserData?.phone}`);
							setUserData(res.user);
							clearInterval(intervalId);
						}
					}, 1000);
				}
			})();
		}
	}, []);
	return (
		<>
			{userData ? (
				<Grid container direction={"column"} m={0} gap={2} sx={{ backgroundColor: "secondary.main", height: "100vh", p: 2 }}>
					<Grid item display={"flex"} justifyContent={"center"} mt={3}>
						<Avatar sx={{ width: "100px", height: "100px", fontSize: "4rem" }}>{userData?.fullName.slice(0, 1).toUpperCase()}</Avatar>
					</Grid>
					<Grid item display={"flex"} justifyContent={"center"}>
						<StyledTypography variant="h1">{userData?.fullName}</StyledTypography>
					</Grid>
					<Grid item display={"flex"} justifyContent={"center"}>
						<Box
							mt={5}
							justifyContent={favorites.length === 1 ? "center" : "start"}
							sx={{
								display: "flex",
								width: {
									mobile: "255px",

									lmobile: "300px",
								},

								gap: 2,
								overflowX: "scroll",
								height: "300px",
							}}
							p={1}
						>
							{favorites.map((favorite) => (
								<BusinessCard data={favorite} key={favorite._id} isFavorited={true} />
							))}
						</Box>
					</Grid>
					<Grid item justifyContent="center" display="flex" mt={2}>
						<SignOut />
					</Grid>
				</Grid>
			) : (
				<div style={{ height: "calc(100vh - 48px)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<CircularProgress />
				</div>
			)}
		</>
	);
};

export default Profile;
