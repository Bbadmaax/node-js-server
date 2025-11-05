import express from "express"
import { login, register } from "../controller/AuthController.js";
import { protect } from "../middlewares/Authmiddleware.js";

import { validate } from "../middlewares/validate.js";
import { registerSchema } from "../schemas/registerSchema.js";
import { loginSchema } from "../schemas/loginSchema.js";


const router = express.Router()

router.post("/register", validate(registerSchema),  register)
router.post("/login", validate(loginSchema), login)



// protect route  (qof aan login aheyn inta ma iman karo)
router.get("/profile", protect, (req,res)=> {
    //jalkan hadii loo soo gudbo maxa ku jira protext lasoo dhaafo
     res.json({ message: "Protected route ✅", user: req.user.name });
})

export default router;