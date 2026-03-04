// Original Code
import jwt from "jsonwebtoken"

const auth = (req, res, next)=>{
    const token = req.headers.authorization;
    console.log("Token received by backend:", token);
    try {
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (error){
       res.json({success: false, message:"Invalid Token"})     
    }
}

export default auth;  

// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;
//   console.log("---- AUTH DEBUG ----");
//   console.log("Token received:", token);
//   console.log("JWT_SECRET:", process.env.JWT_SECRET);

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded token:", decoded);
//     next();
//   } catch (error) {
//     console.log("Auth error:", error.message);
//     res.json({ success: false, message: "Invalid Token" });
//   }
// };

// export default auth;