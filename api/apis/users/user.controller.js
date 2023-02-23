const User=require('./user.service')
const {genSaltSync,hashSync}=require("bcrypt")

exports.create=(req,res)=>{
       const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
    console.log(req.body)
    res.send(req.body)
    User.create(body,(err,results)=>{
        if(err){
            console.log(err)
            return res.status(500).json({
                success:0,
                message:'Database connection error'
            })
        }
        return res.status(200).json({
            success:1,
            data:results
        })
    })
}

/*module.exports={
    createUser:(req, res)=>{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
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
} */