import RegForm from "./components/auths/RegForm";
import { Box, Grid } from "@mui/material";

function App() {
	return (
		<Grid className="App" bgcolor={"secondary.main"} container alignItems={"center"} justifyContent={"center"}>
			<Grid item mobile={11} tablet={8} laptop={6} pc={4}>
				<RegForm />
			</Grid>
		</Grid>
	);
}

export default App;
