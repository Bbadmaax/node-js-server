
export const Authorize = (...roles)=> {
    return (req, res , next)=> {
        
         if (!roles.includes(req.user.roles)) {
      return res.status(401).json({ message: `Access denied ❌  You don't have permission` });
    }
    next()// userka waa authorized
    }
}