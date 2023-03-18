import { Button } from "@mui/material";
import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

/* Sign out btn */

const SignOut = () => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const clickHandler = () => {
		signOut();
		navigate("/login");
		window.location.reload();
	};

	return (
		<Button variant="contained" color="error" size="large" onClick={clickHandler}>
			Sign Out
		</Button>
	);
};

export default SignOut;
