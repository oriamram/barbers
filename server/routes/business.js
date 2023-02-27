import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { newBusiness, allBusinesses } from "../controllers/business.js";

const businessRouter = express.Router();

/* POSTS */

businessRouter.post("/", newBusiness);
businessRouter.get("/all", allBusinesses);

export default businessRouter;
