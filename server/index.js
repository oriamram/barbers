import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
	})
	.catch((e) => console.log(`${e} Didn't connect to mongoose`));
