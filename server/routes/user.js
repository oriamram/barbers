import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUser } from "../controllers/user.js";

const userRouter = express.Router();

/* GETS */

userRouter.get("/:id", verifyToken, getUser);

export default userRouter;
