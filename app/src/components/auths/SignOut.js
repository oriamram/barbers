import { Button } from "@mui/material";
import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
	const signOut = useSignOut();
	const navigate = useNavigate();

	const clickHandler = () => {
		signOut();
		navigate("/login");
	};

	return (
		<Button variant="contained" color="error" size="small" onClick={clickHandler}>
			Sign Out
		</Button>
	);
};

export default SignOut;
