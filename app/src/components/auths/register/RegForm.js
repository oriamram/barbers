import React from "react";
import { Box, Paper, TextField, Grid, FormLabel, FormControlLabel, Radio, RadioGroup, FormControl, Typography, Button } from "@mui/material";
import InputMask from "react-input-mask";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import loginAuth from "../../../funcs/loginAuth";
import { useSignIn } from "react-auth-kit";

const StyledInput = styled(TextField)(({ theme }) => ({
	width: "100%",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		fontSize: "2rem",
	},
	[theme.breakpoints.up("tablet")]: {
		fontSize: "3rem",
	},
}));

//yup scheme
const validationSchema = yup.object({
	fullName: yup.string().required("full name is a required field"),
	password: yup.string().min(6).required(),
	phone: yup
		.string()
		.matches(/^\(\d{3}\) \d{3}-\d{4}$/, "valid phone number is required")
		.required("Phone number is required"),
	email: yup.string().email().required(),
});

/* Register form */

const RegForm = () => {
	const signIn = useSignIn();
	const navigate = useNavigate();

	//validations and handlers by formik
	const formik = useFormik({
		initialValues: {
			fullName: "",
			password: "",
			phone: "",
			email: "",
			gender: "female",
		},
		onSubmit: async (values) => {
			try {
				const res = await axios.post("/auth/register", values);
				await loginAuth(values, signIn);
				navigate("/profile");
			} catch (e) {
				alert("Phone number or email already exists");
			}
		},
		validationSchema: validationSchema,
	});

	return (
		<Box
			sx={{
				width: { mobile: "320px", tablet: "500px", ltablet: "600px" },
				height: "90vh",
				minHeight: { mobile: "550px", tablet: "570px", laptop: "400px" },
				maxHeight: { mobile: "600px" },
			}}
		>
			<Paper sx={{ width: "100%", height: "100%", bgcolor: "secondary.main", p: 2 }} elevation={5}>
				<form onSubmit={formik.handleSubmit} style={{ height: "100%" }}>
					<Grid container height={"100%"} direction={"column"} display={"felx"} justifyContent={"space-between"} alignItems={"center"}>
						<Grid item container spacing={2} mobile={5}>
							<Grid item mobile={12} display={"flex"} justifyContent={"center"}>
								<StyledTypography variant="h1">Register</StyledTypography>
							</Grid>
							<Grid item mobile={12} ltablet={6} laptop={6}>
								<StyledInput
									id="fullName"
									name="fullName"
									label="Full Name"
									value={formik.values.fullName}
									onChange={formik.handleChange}
									size="small"
									error={formik.touched.fullName && Boolean(formik.errors.fullName)}
									helperText={formik.touched.fullName && formik.errors.fullName}
								/>
							</Grid>
							<Grid item mobile={12} ltablet={6} laptop={6}>
								<InputMask mask="(999) 999-9999" maskChar="_" value={formik.values.phone} onChange={formik.handleChange}>
									{() => (
										<StyledInput
											id="phone"
											name="phone"
											label="Phone Number"
											size="small"
											error={formik.touched.phone && Boolean(formik.errors.phone)}
											helperText={formik.touched.phone && formik.errors.phone}
										/>
									)}
								</InputMask>
							</Grid>
							<Grid item mobile={12}>
								<StyledInput
									type="email"
									id="email"
									name="email"
									label="E-mail"
									value={formik.values.email}
									onChange={formik.handleChange}
									size="small"
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
								/>
							</Grid>
							<Grid item mobile={12}>
								<StyledInput
									type="password"
									id="password"
									name="password"
									label="Password"
									value={formik.values.password}
									onChange={formik.handleChange}
									size="small"
									error={formik.touched.password && Boolean(formik.errors.password)}
									helperText={formik.touched.password && formik.errors.password}
								/>
							</Grid>
							<Grid item mobile={12}>
								<FormControl>
									<FormLabel id="genderLabel">Gender</FormLabel>
									<RadioGroup name="gender" value={formik.values.gender} onChange={formik.handleChange} row>
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="male" control={<Radio />} label="Male" />
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						<Grid item mobile={2} sx={{ display: "flex", alignItems: "end", justifyContent: "center" }}>
							<Button type="submit" variant="contained" size="large" sx={{ width: "100%", bgcolor: "primary.main" }}>
								send
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Box>
	);
};

export default RegForm;
