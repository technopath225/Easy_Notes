import express from "express"
import pool from "./db.js";
const router = express.Router();

router.get("", async (req,res) => {



try {
    
    const allNotes = await pool.query("Select * from notes");
    res.json(allNotes.rows);

    
} catch (error) {
    console.error(error.message);
    res.status(500).json({error : "Failed to fetch data"});
}
})

export default router;