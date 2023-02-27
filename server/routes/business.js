import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { newBusiness, allBusinesses, businessesByNames } from "../controllers/business.js";

const businessRouter = express.Router();

/* POSTS */

businessRouter.post("/", newBusiness);
businessRouter.get("/all", allBusinesses);
businessRouter.get("/byName", businessesByNames);

export default businessRouter;
