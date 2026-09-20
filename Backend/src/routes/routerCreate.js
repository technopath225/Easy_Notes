import express from "express"
import pool from "../db.js";
import { STATUS_CODES } from "node:http";
import authMiddleware from "../middleware/authenticator.js"


const router = express.Router();


router.use(authMiddleware);

router.post("", async (req,res) => {

    try {
        const note = req.body;
        console.log(note.title);
        const retData = await pool.query("INSERT INTO notes (title,notetext,created_at,updated_at,user_id) VALUES ($1,$2,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,$3)  Returning *", [note.title,note.notetext,req.user_id]);
            
        if(retData.rowCount == 0){
            return res.status(404).json({ error: "Something WENT WRONG" })
        }
        

        res.status(200).json({ message: "Created SUCCESSFULY" })
        

        
    } catch (error) {
        console.error(error.message);
       
    }


})

export default router;