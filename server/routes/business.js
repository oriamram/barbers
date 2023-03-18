import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { newBusiness, businesses, businessesByNames, getCount } from "../controllers/business.js";

const businessRouter = express.Router();

/* POSTS */

businessRouter.post("/", newBusiness);

/* GETS */

businessRouter.get("/", businesses);
businessRouter.get("/byName", businessesByNames);
businessRouter.get("/count", getCount);

export default businessRouter;
