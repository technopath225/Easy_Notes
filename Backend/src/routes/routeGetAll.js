import express from "express"
import pool from "../db.js";
import authMiddleware from "../middleware/authenticator.js"


const router = express.Router();


router.use(authMiddleware);


router.get("", async (req,res) => {



try {
    
   // console.log(`user ID FROM REQ :: ${req.user_id}`);
    const allNotes = await pool.query("Select note_id,title,notetext,created_at,updated_at from notes where user_id = ($1) order by updated_at desc",[req.user_id]);
    
    res.json(allNotes.rows);

    
} catch (error) {
    console.error(error.message);
    res.status(500).json({error : "Failed to fetch data"});
}
})

export default router;