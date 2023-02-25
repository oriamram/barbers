import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Rating, CardActions, Collapse, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getAuthStateCookie } from "../../funcs/getAuthCookies";
import { post } from "../../funcs/authorizedRequests";

/* Business card */

const BusinessCard = ({ isFavorited }) => {
	const userPhone = getAuthStateCookie().phone;

	const [cardData, setCardData] = useState({
		name: "משה עיצוב שיער",
		city: "הוד השרון",
		rating: 3,
	});

	const addFavorite = async () => {
		await post("/user/favorite", { shopName: cardData.name, phone: userPhone });
	};

	return (
		<Card sx={{ width: "230px", m: 5 }} elevation={5}>
			<CardMedia
				sx={{ height: 120 }}
				image="http://www.shortcuts.net/wp-content/uploads/sites/3/2021/08/salon-chairs-with-mirrors-and-overhead-lights.jpg"
				title="shop Pic"
			/>
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
				<IconButton onClick={addFavorite}>{isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
			</CardActions>
		</Card>
	);
};

export default BusinessCard;
