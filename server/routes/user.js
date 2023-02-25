import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { updateFavorites } from "../controllers/user.js";

const userRouter = express.Router();

/* POSTS */

//Update user favorites
userRouter.post("/favorite", verifyToken, updateFavorites);

export default userRouter;
