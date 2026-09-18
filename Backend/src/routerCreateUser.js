import express from "express"
import pool from "./db.js";
const router = express.Router();

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const {name,email,pass} = body;

    //const allNotes = await pool.query("select * from users where user_id = ($1) and  password = ($2) ;",[`%${email,pass}%`]);
    const allNotes = await pool.query("select * from users where email = ($1);",[email]);
   
    
    if(allNotes.rows.length === 0){
        return res.status(500).json({message:"user created"});
    }

    return res.status(400).json({message:"Account with this email already exist"});

    
  

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({message:"something went wrong"});
}
})

export default router;