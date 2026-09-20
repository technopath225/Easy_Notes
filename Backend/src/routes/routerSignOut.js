import express from "express"
import {UnbindToken} from "../utils/jwtHelper.js" 

const router = express.Router();

router.post("", async (req,res) => {

   await UnbindToken(res);
   
   

});

export default router;