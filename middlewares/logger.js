export const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toLocaleString();

  console.log(` 
      -----------------------
         time:🕛 ${time} -
         method : 🌐 ${method} - 
          url : 📍 ${url} -
       --------------------------
       `);
  next();
};

// export const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().toLocaleString(); // Waqti & taariikh buuxda

//   res.on("finish", () => {
//     console.log(`
//         ---------------------------------
//         time:🕛 ${time} -
//         method : 🌐 ${method} -
//         url : 📍 ${url} -
//           statusCode: ${res.statusCode}
//           ----------------------------
//           `);
//   });

//   next(); // Gudbi middleware-ka xiga
// };
