require("dotenv").config()
const express = require("express")
const app = express();
const userRouter=require('./apis/users/user.router')


const PORT=4000
app.use(express.json())

app.use('/apis/users',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("Server Up and Working:", process.env.PORT)
})