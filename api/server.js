require("dotenv").config()

const express=require("express")

const app = express();
const PORT=4000
const userRouter=require("./apis/users/user.router")
app.use(express.json())
app.use("./apis/users",userRouter)

app.listen(process.env.APP_PORT,()=>{
    console.log("Server Up and Working:",process.env.APP_PORT)
})