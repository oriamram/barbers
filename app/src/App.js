import React from "react";
import { Routes, Route } from "react-router-dom";
import { Paper } from "@mui/material";
import { RequireAuth } from "react-auth-kit";
import RegForm from "./components/auths/register/RegForm";
import LoginForm from "./components/auths/login/LoginForm";
import Profile from "./components/pages/profile/Profile";
import Menu from "./components/pages/menu/Menu";

function App() {
	return (
		<Routes>
			<Route
				path={"/profile"}
				element={
					<RequireAuth loginPath={"/login"}>
						<Profile />
					</RequireAuth>
				}
			/>
			<Route path="/menu" element={<Menu />} />
			<Route path="/register" element={<RegForm />} />
			<Route path="/login" element={<LoginForm />} />
		</Routes>
	);
}

export default App;
