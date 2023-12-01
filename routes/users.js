import express from "express";
import { getUsers,postUser,getUser,deleteUser,patchUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);

export default router;
