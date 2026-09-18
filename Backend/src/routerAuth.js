import express from "express"
import pool from "./db.js";
const router = express.Router();

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const {email,pass} = body;

    //const allNotes = await pool.query("select * from users where user_id = ($1) and  password = ($2) ;",[`%${email,pass}%`]);
    const allNotes = await pool.query("select * from users where email = ($1) and password = ($2) ;",[email,pass]);
   
    
    if(allNotes.rows.length === 0){
        return res.status(400).json({message:"Invalid email or password"});
    }

    return res.status(200).json({message:"successs"});

    
  

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({message:"something went wrong"});
}
})

export default router;