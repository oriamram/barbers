import React, { useState } from "react";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import FilterType from "./FilterType";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WcIcon from "@mui/icons-material/Wc";
import { Collapse, Divider, IconButton, List } from "@mui/material";

/* Filter bar inside menu page */

const FilterBar = () => {
	const [showFilter, setShowFilter] = useState(false);

	const handelFilter = () => {
		setShowFilter(!showFilter);
	};

	return (
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
				<MenuBookRoundedIcon fontSize="large" />
			</IconButton>
			<Divider />
			<Collapse in={showFilter} sx={{ pr: 0, width: "100%" }} timeout="auto" unmountOnExit>
				<FilterType filterName="ערים" options={["הוד השרון", "רעננה", "כפר סבא"]} type="city">
					<LocationCityIcon />
				</FilterType>
				<FilterType filterName="סוג מספרה" options={["גברים", "נשים"]} type="genders">
					<WcIcon />
				</FilterType>
			</Collapse>
		</List>
	);
};

export default FilterBar;
