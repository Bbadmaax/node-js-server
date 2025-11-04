import express from "express";
import { createUser, deleteUser, getUserOnly, getUsers,   updateUser } from "../controller/useController.js";
import { protect } from "../middlewares/Authmiddleware.js";
import { Authorize } from "../middlewares/Authorize..js";

const router = express.Router()

router.get("/", protect, Authorize('admin'), getUsers)
router.get("/:id", getUserOnly)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)



export default router;