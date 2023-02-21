const pool=("../../config/db")

module.exports={
    create:(data, callback) =>{
        pool.query(
            "INSERT INTO Users(firstName,lastName,gender,email,password,number) VALUES(?,?,?,?,?,?)", [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
        ],
            (error, results, fields) => {
                if (error) {
                    console.log('failed')
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    }
}
 


