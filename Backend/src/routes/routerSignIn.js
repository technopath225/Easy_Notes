import express from "express"
import pool from "../db.js"
import {CompareHash, HashPassword} from "../utils/hashHelper.js" 
import {GenerateToken,BindToken} from "../utils/jwtHelper.js" 
const router = express.Router();

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const {name,email,pass} = body;

    //const allNotes = await pool.query("select * from users where user_id = ($1) and  password = ($2) ;",[`%${email,pass}%`]);
    const userDetails = await pool.query("select user_id,password from users where email = ($1);",[email]);
   
    
    if(userDetails.rows.length === 0){
   
        return res.status(400).json({message:"Invalid Email or Password"});

    }
    
 //  console.log(`user_ID ${userDetails.rows[0].user_id}`);
    const hashedPass = userDetails.rows[0].password;

    const valid = await CompareHash(pass,hashedPass);
    
    if(valid ){
       const token = GenerateToken(userDetails.rows[0].user_id);
       BindToken(token,res);
        return res.status(200).json({message:"sign in successfull"});
    }

        return res.status(400).json({message:"Whong password or Email"});
    

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({message:"something went wrong"});
}
})

export default router;