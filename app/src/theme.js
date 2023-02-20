import { createTheme } from "@mui/material";

const blackShades = {
	100: "#d3d3d3",
	200: "#a7a7a7",
	300: "#7a7a7a",
	400: "#4e4e4e",
	500: "#222222",
	600: "#1b1b1b",
	700: "#141414",
	800: "#0e0e0e",
	900: "#070707",
};
const whiteShades = {
	100: "#fcfcfc",
	200: "#fafafa",
	300: "#f7f7f7",
	400: "#f5f5f5",
	500: "#f2f2f2",
	600: "#c2c2c2",
	700: "#919191",
	800: "#616161",
	900: "#303030",
};

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			light: blackShades[300],
			main: blackShades[400],
			dark: blackShades[700],
		},
		secondary: {
			light: whiteShades[100],
			main: whiteShades[400],
			dark: whiteShades[600],
		},
		error: {
			light: "#FF0000 ",
			main: "#B33333 ",
			dark: "#B22222",
		},
	},
	typography: {
		fontFamily: "roboto",
	},
	spacing: 8,
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 450,
			laptop: 900,
			pc: 1200,
		},
	},
});

export default theme;
