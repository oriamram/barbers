import React, { useContext, useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import BusinessCard from "../../businessCard/BusinessCard";
import { Grid } from "@mui/material";
import { userDataContext } from "../../../App";

export const filtersContext = React.createContext(null);

/* Menu page component */

const Menu = ({ businesses, setBusinesses }) => {
	const [userData] = useContext(userDataContext);
	const [filters, setFilters] = useState({});

	useEffect(() => {
		(async () => {
			await setBusinesses();
		})();
	}, []);

	const renderByFilter = () => {
		if (Object.values(filters).some((val) => val.length > 0)) {
			let filteredBusiesses = [];
			for (let [filterType, filterOptions] of Object.entries(filters)) {
				if (filterOptions.length > 0) {
					filteredBusiesses =
						filteredBusiesses.length > 0
							? [...filteredBusiesses?.filter((business) => filterOptions.some((opt) => business[filterType].includes(opt)))]
							: [
									...filteredBusiesses,
									...businesses?.filter((business) => !filteredBusiesses.includes(business) & filterOptions.some((opt) => business[filterType].includes(opt))),
							  ];
				}
			}
			return filteredBusiesses?.map((business) => (
				<Grid itme="true" key={business.name}>
					<BusinessCard data={business} isFavorited={userData?.favorites.includes(business.name)} />
				</Grid>
			));
		} else
			return businesses?.map((business) => (
				<Grid itme="true" key={business.name}>
					<BusinessCard data={business} isFavorited={userData?.favorites.includes(business.name)} />
				</Grid>
			));
	};

	return (
		<filtersContext.Provider value={[filters, setFilters]}>
			<FilterBar />
			<Grid container direction={"column"} gap={4} display={"flex"} alignItems={"center"} pt={4} bgcolor="secondary.light" minHeight="100vh">
				{renderByFilter()}
			</Grid>
		</filtersContext.Provider>
	);
};

export default Menu;
