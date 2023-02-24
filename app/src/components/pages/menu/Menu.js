import React, { useState } from "react";
import BusinessCard from "../../businessCard/BusinessCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Box, Card, CardContent, CardHeader, Collapse, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";

const filterTextStyles = { display: "flex", justifyContent: "end" };
const filterOptionTextStyles = { "& > *": { fontSize: ".9rem" } };

const StyledFilterOptionBtn = styled(ListItemButton)(({ theme }) => ({
	padding: 0,
}));

const Menu = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showCity, setShowCity] = useState(false);

	const handelFilter = () => {
		setShowFilter(!showFilter);
	};

	const handelCity = () => {
		setShowCity(!showCity);
	};

	return (
		<>
			<List
				sx={{
					width: "100%",
					bgcolor: "secondary.main",
					boxShadow: "1px 1px 5px #a7a7a7",
					p: "0",
					display: "flex",
					flexDirection: "column",
					alignItems: "end",
				}}
				component="nav"
			>
				<IconButton onClick={handelFilter}>
					<SearchOutlinedIcon fontSize="large" />
				</IconButton>
				<Divider />
				<Collapse in={showFilter} sx={{ pr: 1 }} timeout="auto" unmountOnExit>
					<ListItemButton onClick={handelCity}>
						<ListItemText primary="ערים" sx={filterTextStyles} />
						<ListItemIcon sx={{ display: "flex", justifyContent: "end", minWidth: "30px" }}>
							<LocationCityIcon />
						</ListItemIcon>
					</ListItemButton>
					<Collapse in={showCity} timeout="auto" unmountOnExit sx={{ pr: 1 }}>
						<List component="div" disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "end", pr: 3 }}>
							<StyledFilterOptionBtn>
								<ListItemText primary="הוד השרון" sx={filterOptionTextStyles} />
							</StyledFilterOptionBtn>
							<StyledFilterOptionBtn>
								<ListItemText primary="רעננה" sx={filterOptionTextStyles} />
							</StyledFilterOptionBtn>
						</List>
					</Collapse>
				</Collapse>
			</List>

			<BusinessCard />
		</>
	);
};

export default Menu;
