import React, { useState } from "react";
import { Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterOption from "./FilterOption";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	padding: 0,
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

/* COMPONENT */

const FilterType = ({ filterName }) => {
	const [expended, setExpended] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleClick = () => {
		setExpended(!expended);
	};

	const handleSelectedOption = (value) => {
		if (!selectedOptions.includes(value)) {
			setSelectedOptions([...selectedOptions, value]);
		} else {
			const newSelectedOptions = selectedOptions.filter((val) => val !== value);
			setSelectedOptions(newSelectedOptions);
		}
	};

	return (
		<>
			<ListItemButton onClick={handleClick}>
				<ExpandMore expand={expended}>
					<ExpandMoreIcon />
				</ExpandMore>
				<ListItemText primary={filterName} sx={{ display: "flex", justifyContent: "end" }} />
				<ListItemIcon sx={{ display: "flex", justifyContent: "end", minWidth: "30px" }}>
					<LocationCityIcon />
				</ListItemIcon>
			</ListItemButton>
			<Collapse in={expended} timeout="auto" unmountOnExit sx={{ pr: 1, whiteSpace: "nowrap", overflow: "visible", width: "120px", marginLeft: "auto" }}>
				<List component="div" disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "end", pr: 3 }}>
					<FilterOption optionName="הוד השרון" onClick={handleSelectedOption} />
					<FilterOption optionName="רעננה" onClick={handleSelectedOption} />
				</List>
			</Collapse>
		</>
	);
};

export default FilterType;
