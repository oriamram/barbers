import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";
import "./index.scss";
import NavBar from "./components/navBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AuthProvider authType={"cookie"} authName="_auth" cookieSecure={false}>
			<BrowserRouter>
				<NavBar />
				<App />
			</BrowserRouter>
		</AuthProvider>
	</ThemeProvider>
);
