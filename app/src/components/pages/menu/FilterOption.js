import React, { useContext, useEffect, useState } from "react";
import { Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { HandleSelectedOptionContext } from "./FilterType";
import { filtersContext } from "./Menu";

/* Filter option inside a filter type */

const FilterOption = ({ optionName, type }) => {
	const [filters, setFilters] = useContext(filtersContext);
	const [isChecked, setIsChecked] = useState(filters[type] ? filters[type].includes(optionName) : false);
	const onClick = useContext(HandleSelectedOptionContext);

	const clickHandler = () => {
		onClick(optionName);
		setIsChecked(!isChecked);
		if (!isChecked) {
			setFilters({ ...filters, [type]: filters[type] ? [...filters[type], optionName] : [optionName] });
		} else {
			const newFilters = [...filters[type]];
			const indexToRemove = newFilters.indexOf(optionName);
			newFilters.splice(indexToRemove, 1);
			setFilters({ ...filters, [type]: newFilters });
		}
	};

	return (
		<ListItemButton sx={{ p: 0, direction: "rtl" }} onClick={() => clickHandler()}>
			<Checkbox size="small" sx={{ p: 0 }} checked={isChecked} />
			<ListItemText primary={optionName} sx={{ "& > *": { fontSize: ".9rem" }, textAlign: "end", mr: 1 }} />
		</ListItemButton>
	);
};

export default FilterOption;
