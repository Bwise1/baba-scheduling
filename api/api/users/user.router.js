import {createUser,getAllUsers,getUserByUserId,updateUserById,deleteUserById}  from "./user.controller.js"
import express from 'express'
const router=express.Router()

router.post("/",createUser)
router.get("/",getAllUsers)
router.get("/:id",getUserByUserId)
router.patch("/",updateUserById)
router.delete("/",deleteUserById)

export default router
