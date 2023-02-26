import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { newShop, allShops } from "../controllers/shop.js";

const shopRouter = express.Router();

/* POSTS */

shopRouter.post("/", newShop);
shopRouter.get("/all", allShops);

export default shopRouter;
