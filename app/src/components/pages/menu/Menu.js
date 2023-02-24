import React, { useState } from "react";
import BusinessCard from "../../businessCard/BusinessCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterType from "./FilterType";
import { Collapse, Divider, IconButton, List } from "@mui/material";

const Menu = () => {
	const [showFilter, setShowFilter] = useState(false);

	const handelFilter = () => {
		setShowFilter(!showFilter);
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
				<Collapse in={showFilter} sx={{ pr: 0 }} timeout="auto" unmountOnExit>
					<FilterType filterName="ערים" />
				</Collapse>
			</List>

			<BusinessCard />
		</>
	);
};

export default Menu;
