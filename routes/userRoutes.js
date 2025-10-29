import express from "express";
import { createUser, deleteUser, getUserOnly, getUsers, updateUser } from "../controller/useController.js";

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUserOnly)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;