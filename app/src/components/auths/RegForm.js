import React from "react";
import { Box, Paper, TextField, Grid, FormLabel, FormControlLabel, Radio, RadioGroup, FormControl, Divider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const StyledInput = styled(TextField)(({ theme }) => ({
	width: "100%",
}));

const RegForm = () => {
	const formik = useFormik({
		initialValues: {
			fullName: "",
			password: "",
			phone: "",
			email: "",
			gender: "female",
		},
		onSubmit: async (values) => {
			// const res = await axios.post("/auth/register", values, { headers: { Authorization: "aaa" } });
			console.log(values);
		},
	});

	return (
		<Box sx={{ width: "100%", height: { mobile: "90vh", laptop: "50vh" }, minHeight: { mobile: "380px", laptop: "320px" }, maxHeight: { mobile: "500px" } }}>
			<Paper sx={{ width: "100%", height: "100%", bgcolor: "secondary.main", p: 2 }} elevation={5}>
				<form onSubmit={formik.handleSubmit} style={{ height: "100%" }}>
					<Grid container height={"100%"} direction={"column"} display={"felx"} justifyContent={"space-between"}>
						<Grid item container spacing={2} mobile={5}>
							<Grid item mobile={12} ltablet={6} laptop={6}>
								<StyledInput id="fullName" name="fullName" label="Full Name" value={formik.values.fullName} onChange={formik.handleChange} size="small" />
							</Grid>
							<Grid item mobile={12} ltablet={6} laptop={6}>
								<StyledInput id="phone" name="phone" label="Phone Number" value={formik.values.phone} onChange={formik.handleChange} size="small" />
							</Grid>

							<Grid item mobile={12}>
								<StyledInput type="email" id="email" name="email" label="E-mail" value={formik.values.email} onChange={formik.handleChange} size="small" />
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
							<Button type="submit" variant="contained" size="large" sx={{ width: "50%" }}>
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
