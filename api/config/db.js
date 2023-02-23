const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

let connection;
async function createConnection() {
  connection = await mysql.createConnection(process.env.DATABASE_URL);
}
async function query(sql) {
  if (!connection) {
    console.log("here from connection");
    await createConnection();
  }
  const [results] = await connection.query(sql);
  console.log(results);

  return results;
}



/*const {createPool}=require("mysql")
const pool=createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
})
*/
module.exports=query