import { createConnection } from "mysql";
import mysql from "mysql2/promise";
import { config } from "dotenv";

config();



const db=createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    ssl:{
        rejectUnauthorized:true
    },
   
})




export default db