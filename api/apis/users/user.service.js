const db=("../../config/db")



const User=function(user){

    this.first_name=user.first_name
    this.last_name=user.last_name
    this.gender=user.gender
    this.email=user.email
    this.password=user.password
    this.number=user.number
}
User.create=(newUser,callback)=>{
    db.query("INSERT INTO registration SET ?",newUser,(err,res)=>{
        if(err){
            console.log("error: ",err)
            return callback(err,null)
            
        }
        console.log("created User: ",{...newUser})
       return callback(null,{ ...newUser})
    })
}


module.exports= User

/*module.exports= {
    create:(data,callback)=>{
        pool.query(
           `insert into registration (firstName,lastName,gender,email,password,number) values (?,?,?,?,?,?) ` ,
           [
            data.firstName,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number
           ],
           (error,results,fields)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
           }
        )
    }
}*/
 


