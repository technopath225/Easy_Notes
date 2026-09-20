import jwt from "jsonwebtoken"
import "dotenv/config";

export const  GenerateToken = (user_id) => {

const payload = {id:user_id};
const token = jwt.sign(payload,process.env.JWT_SECTRET,{expiresIn : process.env.JWT_EXPIRES_IN || "1d"})
return token;
}

export const  BindToken = (token,res) =>{

    res.cookie("jwt",token, {httpOnly:true, secure:process.env.NODE_DEV === "production",
        sameSite:"lax",
        maxAge:(1000 * 60 * 60 * 24 ) * 7
    })

}

export const UnbindToken = async (res) =>{
try {
    res.cookie("jwt","",{ httpOnly:true,expires: new Date(0), secure: process.env.NODE_ENV === "production",
        sameSite: "strict"})

    res.status(200).json({message:"signed out successfully"});
} catch (error) {
    res.status(400).json({errors:"SOMETHING WENT WRONG WITH SIGNING OUT"});
}
   
}