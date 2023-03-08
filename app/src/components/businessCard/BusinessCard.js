import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Rating, CardActions, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { post } from "../../funcs/authorizedRequests";
import { userDataContext } from "../../App";

/* Business card */

const BusinessCard = ({ isFavorited, data }) => {
	const [userData, setUserData] = useContext(userDataContext);
	const userPhone = userData?.phone;
	const [isFav, setIsFav] = useState(isFavorited);
	const [cardData, setCardData] = useState({
		name: data.name,
		city: data.city,
		rating: data.rating,
		image: data.image,
	});
	useEffect(() => {
		setIsFav(isFavorited);
	}, [isFavorited]);

	const updateFavorites = async () => {
		try {
			const res = (await post("/user/favorite", { businessName: cardData.name, phone: userPhone })).data;
			setIsFav(res.isFavorite);
			setUserData({ ...userData, favorites: res.favorites });
		} catch (e) {
			alert("You should login before being able to add to favorites");
		}
	};

	return (
		<Card sx={{ minWidth: "230px", width: "260px", maxHeight: "260px" }} elevation={5}>
			<CardMedia sx={{ height: 120 }} image={cardData.image} title="business Pic" />
			<CardContent>
				<Typography variant="h3" sx={{ color: "primary.dark", fontSize: "1.2rem", textAlign: "end" }}>
					{cardData.name}
				</Typography>
				<Typography variant="body1" sx={{ color: "primary.main", textAlign: "end" }}>
					{cardData.city}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
				<Rating readOnly size="medium" value={cardData.rating} />
				<IconButton onClick={updateFavorites}>{isFav ? <FavoriteIcon sx={{ color: "error.light" }} /> : <FavoriteBorderIcon />}</IconButton>
			</CardActions>
		</Card>
	);
};

export default BusinessCard;
