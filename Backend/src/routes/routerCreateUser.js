import express from "express"
import pool from "../db.js";
import {HashPassword} from "../utils/hashHelper.js" 
const router = express.Router();

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const {name,email,pass} = body;

    //const allNotes = await pool.query("select * from users where user_id = ($1) and  password = ($2) ;",[`%${email,pass}%`]);
    const checkValid = await pool.query("select created_at from users where email = ($1);",[email]);
   
    
    if(checkValid.rows.length === 0){


       
         try {

            const hpass = await HashPassword(pass);
           
          
            const newAccount = await pool.query("insert into users  (name,email,password)  values(($1),($2),($3))",[name,email,hpass]);
     
            if(newAccount.rows.length === 0){

                return res.status(200).json({message:"Account Created sccessfully"});
            }

       } catch (error) {
        
        return res.status(400).json(error);

       }
       
       
    }

    return res.status(400).json({message:"Account with this email already exist"});

    
  

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({message:"something went wrong"});
}
})

export default router;