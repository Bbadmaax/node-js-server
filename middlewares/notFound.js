

// middlewares/notFound.js
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `❌ Route not found: ${req.originalUrl}`
  });
};





// export const notFound = (req,res, next)=> {

//     const error = new Error(` route ${req.originalUrl} notfound`);
//     error.statusCode =404
//     next(error) 
// }