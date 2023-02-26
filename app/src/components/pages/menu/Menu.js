import React, { useEffect } from "react";
import FilterBar from "./FilterBar";
import BusinessCard from "../../businessCard/BusinessCard";

/* Menu page component */

const Menu = ({ businesses, setBusinesses }) => {
	useEffect(() => {
		(async () => {
			await setBusinesses();
		})();
	}, []);

	return (
		<>
			<FilterBar />
			{businesses?.map((business, index) => (
				<BusinessCard data={business} key={index} isFavorited={true} />
			))}
		</>
	);
};

export default Menu;
