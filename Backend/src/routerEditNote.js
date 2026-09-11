import express from "express"
import pool from "./db.js";
import { STATUS_CODES } from "node:http";
const router = express.Router();

router.post("", async (req,res) => {

    try {
        const body = req.body;
        


        const retData = await pool.query("UPDATE notes SET title = ($1) , notetext = ($2)   WHERE note_id = ($3) Returning *", [body.title,body.text,body.id]);
        
        res.json(retData);
        

        
    } catch (error) {
        console.error(error.message);
       
    }


})

export default router;