import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Rating, CardActions, Collapse } from "@mui/material";

const BusinessCard = () => {
	const [cardData, setCardData] = useState({
		name: "משה עיצוב שיער",
		city: "הוד השרון",
		rating: 3,
	});

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
			<CardActions>
				<Rating readOnly size="medium" value={cardData.rating} />
			</CardActions>
		</Card>
	);
};

export default BusinessCard;
