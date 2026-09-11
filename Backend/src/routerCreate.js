import express from "express"
import pool from "./db.js";
import { STATUS_CODES } from "node:http";
const router = express.Router();

router.post("", async (req,res) => {

    try {
        const note = req.body;

        const retData = await pool.query("INSERT INTO notes (title,notetext) VALUES ($1,$2) Returning *", [note.title,note.text]);
            
        res.json(retData);
        

        
    } catch (error) {
        console.error(error.message);
       
    }


})

export default router;