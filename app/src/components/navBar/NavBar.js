import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useNavigate } from "react-router-dom";

/* Nav bar */

const NavBar = () => {
	const [selectedSection, setSelectedSection] = useState(0);
	const navigate = useNavigate();

	return (
		<AppBar position="fixed" sx={{ top: "auto", bottom: 0, bgcolor: "primary.light" }}>
			<Toolbar variant="fullWidth">
				<Tabs
					indicatorColor="secondary"
					value={selectedSection}
					sx={{ width: "100%", "& .MuiTabs-flexContainer": { display: "flex", justifyContent: "space-around" } }}
					onChange={(e, value) => setSelectedSection(value)}
					textColor="secondary"
				>
					<Tab icon={<AccountCircleIcon />} onClick={() => navigate("/profile")} />
					<Tab icon={<FormatListBulletedIcon />} onClick={() => navigate("/menu")} />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
