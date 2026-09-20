import express from "express"
import pool from "../db.js";
import authMiddleware from "../middleware/authenticator.js"


const router = express.Router();


router.use(authMiddleware);

router.post("", async (req,res) => {



try {
    
    const body = req.body;
    const allNotes = await pool.query("Select note_id,title,notetext,created_at,updated_at from notes where user_id = ($2) and (notetext ILIKE ($1) or title ILIKE ($1)) order by updated_at desc;",[`%${body.searchTerm}%`,req.user_id]);
   
        
    res.json(allNotes.rows);

    
} catch (error) {
    console.error(error.message);
    res.status(400).json({error : "Failed to search data"});
}
})

export default router;