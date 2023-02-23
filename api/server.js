/*require("dotenv").config()
const express = require("express")
const app = express();
const userRouter=require('./apis/users/user.router')


const PORT=4000
app.use(express.json())

app.use('/apis/users',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("Server Up and Working:", process.env.PORT)
})*/

import express from "express"
import { createConnection } from 'mysql'

const app=express()

const db=createConnection({
    host:"us-east.connect.psdb.cloud",
    user:"epsx15z4j1j4gsbc8ups",
    password:"pscale_pw_w6BAtaBb2gib6P456Jm5OYKu0roubAyG41izhxBSFvM",
    database:"test",
    ssl:{
        rejectUnauthorized:true
    },
   
})
app.get("/",(req,res)=>{
    res.json("hello pedro jose")
})
app.get("/registration",(req,res)=>{
    const q="SELECT * FROM registration"
    db.query(q,(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})
app.listen(8000,()=>{
    console.log('connected to backend')
})