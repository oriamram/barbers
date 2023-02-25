import React, { useContext, useState } from "react";
import { Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { HandleSelectedOptionContext } from "./FilterType";

/* Filter option inside a filter type */

const FilterOption = ({ optionName }) => {
	const [isChecked, setIsChecked] = useState(false);
	const onClick = useContext(HandleSelectedOptionContext);

	const clickHandler = () => {
		onClick(optionName);
		setIsChecked(!isChecked);
	};

	return (
		<ListItemButton sx={{ p: 0, direction: "rtl" }} onClick={() => clickHandler()}>
			<Checkbox size="small" sx={{ p: 0 }} checked={isChecked} />
			<ListItemText primary={optionName} sx={{ "& > *": { fontSize: ".9rem" }, textAlign: "end", mr: 1 }} />
		</ListItemButton>
	);
};

export default FilterOption;
