import React from "react";
import { Avatar, Grid } from "@mui/material";
import SignOut from "../../auths/SignOut";
const Profile = () => {
	return (
		<Grid container>
			<Grid item>
				<SignOut />
			</Grid>
		</Grid>
	);
};

export default Profile;
