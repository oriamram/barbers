import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import RegForm from "./components/auths/register/RegForm";
import LoginForm from "./components/auths/login/LoginForm";
import Profile from "./components/pages/profile/Profile";
import Menu from "./components/pages/menu/Menu";
import { getBusinessCards } from "./funcs/getBusinessCardData";
import { getAuthStateCookie } from "./funcs/getAuthCookies";
import { get } from "./funcs/authorizedRequests";
import api from "./funcs/axios";

export const userDataContext = React.createContext();
//problems : menu request businesses when first up and starts from 0 and not from last skip. try to make that the request will happend inside the menu and not app
export const JUMPS = 4;

function App() {
	const [businesses, setBusinesses] = useState([]);
	const [userData, setUserData] = useState();
	const [favorites, setFavorites] = useState([]);
	const [count, setCount] = useState();

	const setBusinessCards = async (skip) => {
		setBusinesses([...businesses, ...(await getBusinessCards(skip)).data]);
	};

	useEffect(() => {
		const tempUserData = getAuthStateCookie();
		if (tempUserData) {
			(async () => {
				const res = await get(`/user/${tempUserData?.phone}`);
				setUserData(res.user);
			})();
		}
		(async () => {
			setCount((await api.get("/business/count")).data.count);
		})();
		localStorage.setItem("currentJump", 0);
	}, []);

	useEffect(() => {
		if (userData?.favorites) {
			(async () => {
				const favs = (
					await api.get("/business/byName", {
						params: {
							favorites: userData.favorites,
						},
					})
				).data;
				setFavorites(favs);
			})();
		}
	}, [userData]);

	return (
		<>
			{window.screen.width < 450 ? (
				<userDataContext.Provider value={[userData, setUserData]}>
					<Routes>
						<Route
							path={"/profile"}
							element={
								<RequireAuth loginPath={"/login"}>
									<Profile favorites={favorites} />
								</RequireAuth>
							}
						/>
						<Route path="/menu" element={<Menu businesses={businesses} setBusinesses={setBusinessCards} count={count} />} />
						<Route path="/register" element={<RegForm />} />
						<Route
							path="/login"
							element={
								<div style={{ height: "calc(100vh - 48px)", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
									<LoginForm />
								</div>
							}
						/>
						<Route path="*" element={<Navigate to="/profile" />} />
					</Routes>
				</userDataContext.Provider>
			) : (
				<h1>For now this website can be opened only from a smartphone</h1>
			)}
		</>
	);
}

export default App;
