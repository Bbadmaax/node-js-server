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
     res.json(req.user);
})

export default router;


// userka la reguister gareeye oo tokenka loo sameeye sidee ku iman kara profile 
// wuxuu ku iman kara protect weeye in tokenkisa la hbuiyo kadib routeka profil iman kara 
// kadib waa la verify gareyn markA LA VERIFY GAREYO CIDA req soo sameysay decode.id oo laga reebay password dib ugu soo daab routka 
// si aan u ogaano cida soo codsatay rpouteka profil


// token la verify gareyn 
//decode.id = waxa weeye weeye toekn la verify gareye userka watay idiga datebaseka xogta ku jirta lahahelaya re.user ku daraysa 
