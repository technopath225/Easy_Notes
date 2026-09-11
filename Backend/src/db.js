import {Pool} from "pg"


const pool = new Pool({
    user:"postgres",
    password:"AlfredDeButler",
    host:"localhost",
    database:"notes",
    port:5432
});


export default pool;