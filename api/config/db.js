const mysql1=require("mysql")
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

/*let connection;
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
*/

const db=mysql1.createConnection({
    host:"us-east.connect.psdb.cloud",
    user:"epsx15z4j1j4gsbc8ups",
    password:"pscale_pw_w6BAtaBb2gib6P456Jm5OYKu0roubAyG41izhxBSFvM",
    database:"test",
    ssl:{
        rejectUnauthorized:true
    },
   
})
/*8
const {createPool}=require("mysql")
const pool=createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10
})

*/

module.exports= db