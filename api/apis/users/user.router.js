const users=require("./user.controller")
const router=require("express").Router()

router.post("/",users.create)

module.exports = router
