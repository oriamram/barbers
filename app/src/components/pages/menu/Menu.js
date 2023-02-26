import React, { useContext, useEffect } from "react";
import FilterBar from "./FilterBar";
import BusinessCard from "../../businessCard/BusinessCard";
import { Grid } from "@mui/material";
import { userDataContext } from "../../../App";

/* Menu page component */

const Menu = ({ businesses, setBusinesses }) => {
	const userData = useContext(userDataContext);

	useEffect(() => {
		(async () => {
			await setBusinesses();
		})();
	}, []);

	return (
		<>
			<FilterBar />
			<Grid container direction={"column"} gap={4} display={"flex"} alignItems={"center"} pt={4}>
				{businesses?.map((business, index) => (
					<Grid itme="true" key={index}>
						<BusinessCard data={business} isFavorited={userData?.favorites.includes(business.name)} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Menu;
