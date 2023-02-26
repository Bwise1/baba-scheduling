import{create,getUsers,getUserById,updateUser,deleteUser}  from './user.service.js'
import { genSaltSync, hashSync } from "bcrypt"




export  function createUser(req, res) {
    const body = req.body
   const salt = genSaltSync(10)
   body.password = hashSync(body.password, salt)
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

export function getUserByUserId(req,res){
    const id=req.params.id
    getUserById(id,(err,results)=>{
        if(err){
            console.log(err)
            return
        }
        if(!results){
            return res.json({
                success:0,
                message:"Record not found"
            })
        }
        return res.json({
            success:1,
            data:results
        })
    })
}

export function getAllUsers(req,res){
    getUsers((err,results)=>{
        if(err){
            console.log(err)
            return 
        }
        return res.status(200).json({
            success: 1,
            data: results
        })

    })
}

export function updateUserById(req,res){
    const body=req.body
    const salt = genSaltSync(10)
    body.password = hashSync(body.password, salt)
    updateUser(body,(err,results)=>{
        if(err){
            console.log(err)
            return
        }
        if(!results){
            return res.json({
                success:0,
                message:'Failed to update user'
            })
        }
        return res.status(200).json({
            success: 1,
            message:`User with Id:${body.id} updated succesfully`
        })
    })
    
}
export function deleteUserById(req,res){
    const data=req.body
    deleteUser(data,(err,results)=>{
        if(err){
            console.log(err)
            return
        }
        if(!results){
            return res.json({
                success:0,
                message:"Record not found"
            })
        }
        return res.json({
            success:1,
            message:`User with Id:${data.id} deleted successfully `
        })
    })
}