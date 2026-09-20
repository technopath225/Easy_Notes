import express from "express"
import pool from "../db.js";
import { STATUS_CODES } from "node:http";
import authMiddleware from "../middleware/authenticator.js"


const router = express.Router();


router.use(authMiddleware);

router.post("", async (req,res) => {

    try {
        const body = req.body;
        


        const retData = await pool.query("UPDATE notes SET title = ($1) , notetext = ($2), updated_at = CURRENT_TIMESTAMP  WHERE note_id = ($3) and user_id = ($4)", [body.title,body.notetext,body.note_id,req.user_id]);
        
        
        if(retData.rowCount == 0){
            return res.status(404).json({ error: "Failed: INVALID NOTE ID" })
        }

        res.status(200).json({ message: "SAVED SUCCESSFULY" })
        

        
    } catch (error) {
        console.error(error.message);
       
    }


})

export default router;