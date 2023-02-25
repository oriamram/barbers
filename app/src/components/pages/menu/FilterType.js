import React, { useState } from "react";
import { Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterOption from "./FilterOption";

//expend more btn
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

/* Filter type inside the menu */

const FilterType = ({ filterName, options, children }) => {
	const [expended, setExpended] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleClick = () => {
		setExpended(!expended);
	};

	// Add / Remove an option from the selected options array
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
