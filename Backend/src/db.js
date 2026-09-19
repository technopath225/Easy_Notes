import {Pool} from "pg"
import "dotenv/config";

const pool = new Pool({
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    host:process.env.DATABASE_LINK,
    database:process.env.DATABASE,
    port:5432
});



export default pool;