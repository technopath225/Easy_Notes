import express from "express"
import pool from "./db.js";

const router = express.Router();

router.delete("", async (req,res) => {



try {
    
    const note = req.body;

    const deleteNote = await pool.query("DELETE FROM notes WHERE note_id = ($1) Returning *",[note.id]);
    res.json(deleteNote );

    
} catch (error) {
    console.error(error.message);
    res.status(500).json({error : "Failed to delete data data"});
}
})

export default router;