import dotenv from "dotenv"
import express from "express";
import pkg from 'body-parser';

const app = express();
import userRouter from './apis/users/user.router.js';

dotenv.config()
const PORT=4000

app.use(pkg.json())
app.use(pkg.urlencoded({extended:true}))
app.use('/apis/users',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("Server Up and Working:", process.env.PORT)
})

/*import express from "express";
import { createConnection } from "mysql";
import bodyParser from "body-parser";

const app = express();

const db = createConnection({
  host: "us-east.connect.psdb.cloud",
  user: "epsx15z4j1j4gsbc8ups",
  password: "pscale_pw_w6BAtaBb2gib6P456Jm5OYKu0roubAyG41izhxBSFvM",
  database: "test",
  ssl: {
    rejectUnauthorized: true,
  },
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json("hello pedro jose");
});
app.get("/registration", (req, res) => {
  const q = "SELECT * FROM registration";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/reg", (req, res) => {
  const { first_name, last_name, gender, email, password, number } = req.body;
  console.log(req.body);
  const query = `INSERT INTO registration(firstName,lastName, gender, email,password,number) VALUES('${first_name}','${last_name}','${gender}','${email}','${password}','${number}'); `;
  db.query(query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  //   console.log(req);
});
app.listen(8000, () => {
  console.log("connected to backend");
});*/
