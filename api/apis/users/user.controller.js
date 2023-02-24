import create  from './user.service.js'
import { genSaltSync, hashSync } from "bcrypt"



export default function createUser(req, res) {
    const body = req.body
   // const salt = genSaltSync(10)
   // body.password = hashSync(body.password, salt)
    console.log(body)
    create(body, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                success: 0,
                message: "DataBase connection error"
            })
        }
        return res.status(200).json({
            success: 1,
            data: results
        })
    })
} 

