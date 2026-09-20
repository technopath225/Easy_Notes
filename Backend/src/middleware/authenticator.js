import jwt from "jsonwebtoken"
import "dotenv/config";
const AuthMiddleware = async (req,res,next) => {

    try {
        
      //  console.log("MIDDLE WARE REACHED");

        let token = req.cookies.jwt;
        console.log(token)
        if(!token){

            return res.status(400).json({message:"NOT AUTHORISED"});
        
        }
        
        const valid = await jwt.verify(req.cookies.jwt,process.env.JWT_SECTRET)
        
      //  console.log(valid);
        req.user_id = valid.id;
        next();
        

    } catch (error) {
        return res.status(400).json({message:"NOT AUTHORISED V"});
    }


}

export default AuthMiddleware;