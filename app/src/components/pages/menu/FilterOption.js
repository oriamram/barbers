import { Checkbox, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const FilterOption = ({ optionName, onClick }) => {
	return (
		<>
			<ListItemButton sx={{ p: 0, direction: "rtl" }} onClick={() => onClick(optionName)}>
				<Checkbox size="small" sx={{ p: 0 }} />
				<ListItemText primary={optionName} sx={{ "& > *": { fontSize: ".9rem" }, textAlign: "end", mr: 1 }} />
			</ListItemButton>
		</>
	);
};

export default FilterOption;
