import React, { useState } from "react";
import { CardContent, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
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

export const HandleSelectedOptionContext = React.createContext(null);

/* COMPONENT */

const FilterType = ({ filterName, options, children }) => {
	const [expended, setExpended] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const width = `${100 + filterName * 2}px`;

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
		<HandleSelectedOptionContext.Provider value={handleSelectedOption}>
			<ListItemButton onClick={handleClick} sx={{ width: "100%" }}>
				<ExpandMore expand={expended}>
					<ExpandMoreIcon />
				</ExpandMore>
				<ListItemText primary={filterName} sx={{ display: "flex", justifyContent: "end", ml: "auto" }} />
				<ListItemIcon sx={{ display: "flex", justifyContent: "end", minWidth: "30px" }}>{children}</ListItemIcon>
			</ListItemButton>
			<Collapse in={expended} timeout="auto" unmountOnExit>
				<List component="div" disablePadding sx={{ display: "flex", flexDirection: "column", alignItems: "end", pr: 3 }}>
					{options.map((option) => (
						<FilterOption optionName={option} key={option} />
					))}
				</List>
			</Collapse>
		</HandleSelectedOptionContext.Provider>
	);
};

export default FilterType;
