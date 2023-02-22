import React from "react";
import { Box, Paper, Grid, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSignIn } from "react-auth-kit";
import InputMask from "react-input-mask";
import * as yup from "yup";
import loginAuth from "../../../funcs/loginAuth.js";

const StyledInput = styled(TextField)(({ theme }) => ({
	width: "100%",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up("mobile")]: {
		fontSize: "3rem",
	},
	[theme.breakpoints.up("tablet")]: {
		fontSize: "4rem",
	},
}));

const validationSchema = yup.object({
	phone: yup
		.string()
		.matches(/^\(\d{3}\) \d{3}-\d{4}$/, "valid phone number is required")
		.required("Phone number is required"),
	password: yup.string().required("provide password"),
});

/* COMPONENT */

const LoginForm = () => {
	const navigate = useNavigate();
	const signIn = useSignIn();

	const formik = useFormik({
		initialValues: {
			phone: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				await loginAuth(values, signIn);
				navigate("/profile");
			} catch (e) {
				alert("Credentials are not exists");
			}
		},
		validationSchema: validationSchema,
	});

	return (
		<Box
			sx={{
				width: { mobile: "300px", tablet: "500px", ltablet: "600px" },
				height: "90vh",
				minHeight: { mobile: "425px", laptop: "320px" },
				maxHeight: { mobile: "500px" },
			}}
		>
			<Paper sx={{ width: "100%", height: "100%", bgcolor: "secondary.main", p: 2 }} elevation={5}>
				<form onSubmit={formik.handleSubmit} style={{ height: "100%" }}>
					<Grid container height={"100%"} direction={"column"} alignItems={"center"} justifyContent={"space-between"} spacing={2}>
						<Grid item container mobile={5} spacing={2} display={"flex"} justifyContent={"center"}>
							<Grid item>
								<StyledTypography variant="h3">Login</StyledTypography>
							</Grid>
							<Grid item mobile={12}>
								<InputMask mask="(999) 999-9999" maskChar="_" value={formik.values.phone} onChange={formik.handleChange}>
									{() => (
										<StyledInput
											id="phone"
											name="phone"
											label="Phone Number"
											size="large"
											error={formik.touched.phone && Boolean(formik.errors.phone)}
											helperText={formik.touched.phone && formik.errors.phone}
										/>
									)}
								</InputMask>
							</Grid>
							<Grid item mobile={12}>
								<StyledInput
									type="password"
									id="password"
									name="password"
									label="Password"
									value={formik.values.password}
									onChange={formik.handleChange}
									size="large"
									error={formik.touched.password && Boolean(formik.errors.password)}
									helperText={formik.touched.password && formik.errors.password}
								/>
							</Grid>
						</Grid>
						<Grid item mobile={2}>
							<Button type="submit" variant="contained" size="large" sx={{ width: "100%" }}>
								Login
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Box>
	);
};

export default LoginForm;
