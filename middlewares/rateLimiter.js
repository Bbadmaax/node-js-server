import rateLimit from "express-rate-limit";

export const limitter = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : 100,
    message : 'too many request stoped'
})