import express from "express"
import pool from "./db.js";
const router = express.Router();

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const allNotes = await pool.query("select * from notes where notetext ILIKE ($1) or title ILIKE ($1) order by updated_at desc;",[`%${body.searchTerm}%`]);
   
        
    res.json(allNotes.rows);

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({error : "Failed to search data"});
}
})

export default router;