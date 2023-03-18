import React, { useContext, useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import BusinessCard from "../../businessCard/BusinessCard";
import { Grid } from "@mui/material";
import { userDataContext } from "../../../App";
import InfiniteScroll from "react-infinite-scroll-component";
import { JUMPS } from "../../../App";

export const filtersContext = React.createContext(null);

/* Menu page component */

const Menu = ({ businesses, setBusinesses, count }) => {
	const [userData] = useContext(userDataContext);
	const [filters, setFilters] = useState({});
	const [didMount, setDidMount] = useState(true);
	const [skip, setSkip] = useState(0);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		if (businesses.length === 0 || !didMount) {
			(async () => {
				await setBusinesses(skip);
			})();
		}
		if (didMount) setDidMount(false);
	}, [skip]);

	useEffect(() => {
		if (businesses.length >= count) setHasMore(false);
	});

	const renderAll = () => {
		return businesses?.map((business) => (
			<Grid item key={business.name}>
				<BusinessCard data={business} isFavorited={userData?.favorites.includes(business.name)} />
			</Grid>
		));
	};

	//changes the skip/limit
	const setJumps = (jump = JUMPS) => {
		setTimeout(() => {
			setSkip(skip + jump);
			localStorage.setItem("currentJump", skip + jump);
		}, 500);
	};

	return (
		<filtersContext.Provider value={[filters, setFilters]}>
			<FilterBar />
			<InfiniteScroll dataLength={businesses.length} next={setJumps} loader={<h1>Loading..</h1>} hasMore={hasMore}>
				<Grid container direction={"column"} gap={4} display={"flex"} alignItems={"center"} pt={4} bgcolor="secondary.light" minHeight="100vh" pb={10}>
					{renderAll()}
				</Grid>
			</InfiniteScroll>
		</filtersContext.Provider>
	);
};

export default Menu;
