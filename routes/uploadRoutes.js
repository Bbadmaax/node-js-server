import express from "express";
import { protect } from "../middlewares/Authmiddleware.js";
import { upload } from "../middlewares/upload.js"; //multer
import { UploadFile } from "../controller/uploadController.js";

const router = express.Router()

router.post("/profile",protect, upload.single('file'),UploadFile)

export default router