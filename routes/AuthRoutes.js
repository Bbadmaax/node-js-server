import express from "express"
import { login, register } from "../controller/AuthController.js";
import { protect } from "../middlewares/Authmiddleware.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

// protext route  (qof aan login aheyn inta ma iman karo)
router.get("/profile", protect, (req,res)=> {
    //jalkan hadii loo soo gudbo maxa ku jira protext lasoo dhaafo
    console.log("req.user: ", req.user)
    res.json("protecte route")
})

export default router;