import React from "react";
import { Routes, Route } from "react-router-dom";
import { Paper } from "@mui/material";
import { RequireAuth } from "react-auth-kit";
import RegForm from "./components/auths/register/RegForm";
import LoginForm from "./components/auths/login/LoginForm";
import Profile from "./components/pages/profile/Profile";

function App() {
	return (
		<Paper sx={{ width: "100%", height: "100%", bgcolor: "secondary.main" }}>
			<Routes>
				<Route
					path="/profile"
					element={
						<RequireAuth loginPath="/login">
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="/register" element={<RegForm />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</Paper>
	);
}

export default App;
