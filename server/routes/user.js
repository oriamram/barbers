import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { updateFavorites, getUserByPhoneNumber } from "../controllers/user.js";

const userRouter = express.Router();

/* POSTS */

// Update user favorites
userRouter.post("/favorite", verifyToken, updateFavorites);

/* GETS */

// User by name
userRouter.get("/:phone", verifyToken, getUserByPhoneNumber);

export default userRouter;
