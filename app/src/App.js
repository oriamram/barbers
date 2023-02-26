import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import RegForm from "./components/auths/register/RegForm";
import LoginForm from "./components/auths/login/LoginForm";
import Profile from "./components/pages/profile/Profile";
import Menu from "./components/pages/menu/Menu";
import { getAllBusinessCards } from "./funcs/getBusinessCardData";
import { getAuthStateCookie } from "./funcs/getAuthCookies";
import { get } from "./funcs/authorizedRequests";

export const userDataContext = React.createContext();

function App() {
	const [businesses, setBusinesses] = useState([]);
	const [userData, setUserData] = useState();

	const setAllBusinessCards = async () => {
		if (!(businesses.length > 0)) setBusinesses((await getAllBusinessCards()).data);
	};
	useEffect(() => {
		const tempUserData = getAuthStateCookie();
		if (tempUserData) {
			(async () => {
				const res = await get(`/user/${tempUserData?.phone}`);
				setUserData(res.user);
			})();
		}
	}, []);

	return (
		<userDataContext.Provider value={[userData, setUserData]}>
			<Routes>
				<Route
					path={"/profile"}
					element={
						<RequireAuth loginPath={"/login"}>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="/menu" element={<Menu businesses={businesses} setBusinesses={setAllBusinessCards} />} />
				<Route path="/register" element={<RegForm />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="*" element={<Navigate to="/profile" />} />
			</Routes>
		</userDataContext.Provider>
	);
}

export default App;
