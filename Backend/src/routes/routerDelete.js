import express from "express"
import pool from "../db.js";

import authMiddleware from "../middleware/authenticator.js"


const router = express.Router();


router.use(authMiddleware);

router.delete("", async (req,res) => {



try {
    
    const note = req.body;

    const deleteNote = await pool.query("DELETE FROM notes WHERE note_id = ($1) and user_id = ($2) Returning *",[note.note_id,req.user_id]);
    if(deleteNote.rowCount === 0 ){
        return res.status(300).json({message:"No more notes"});
    }
    return res.status(200).json({message:"Delete successfull"});

    
} catch (error) {
    console.error(error.message);
    res.status(500).json({error : "Failed to delete data data"});
}
})

export default router;