import { Pool } from "pg";


const pool = new Pool({
    host:   "localhost" ,
    port: 5432,
    database: usuarios,
    password: 123456.,
    user: usuario
})

pool.query("SELECT NOW()", (err, res, fields)=>{
    if (err) {
        throw err
    } else {
        console.table(res.rows)
    }
})