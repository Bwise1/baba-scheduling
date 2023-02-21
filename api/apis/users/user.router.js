const {createUser}=require("./user.controller")
const router=require("express").Router()

router.post("/apis",createUser)

module.exports = router
