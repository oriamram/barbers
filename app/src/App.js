import React from "react";
import RegForm from "./components/auths/RegForm";
import { Grid } from "@mui/material";

function App() {
	return (
		<Grid className="App" bgcolor={"secondary.main"} container alignItems={"center"} justifyContent={"center"} sx={{ height: "100%" }}>
			<Grid item mobile={11} lmobile={10} tablet={10} ltablet={8} laptop={6} pc={4}>
				<RegForm />
			</Grid>
		</Grid>
	);
}

export default App;
