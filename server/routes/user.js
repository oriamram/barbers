import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUser, updateFavorites } from "../controllers/user.js";

const userRouter = express.Router();

/* GETS */

userRouter.get("/:id", verifyToken, getUser);

/* POSTS */

userRouter.post("/favorite", verifyToken, updateFavorites);

export default userRouter;
