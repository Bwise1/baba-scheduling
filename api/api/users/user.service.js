import db from '../../config/db.js'

export  function create(data, callback) {
    const { first_name, last_name, gender, email, password, number } = data;
    const query = `INSERT INTO registration(firstName,lastName, gender, email,password,number) VALUES('${first_name}','${last_name}','${gender}','${email}','${password}','${number}'); `;
    db.query(query, (error, results) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    }
    );
}

export function getUsers(callback){
    const query=`SELECT id,firstName,lastName, gender, email,password,number from registration`
    db.query(query,(error,results)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results)
    })
}

export function getUserById(id,callback){
    const query=`SELECT id,firstName,lastName, gender, email,password,number from registration where id=${id}`
    db.query(query,(error,results)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results[0])
    })
}

export function updateUser(data,callback){
    const { first_name, last_name, gender, email, password, number,id } = data;
    const query=`UPDATE registration 
                SET firstName=${first_name}, lastName=${last_name}, gender=${gender}, email=${email} ,password=${password}, number=${number} 
                WHERE id=${id}`
                                
    db.query(query,(error,results)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results)
    })
}

export function deleteUser(data,callback){
    
    query=`DELETE from registration WHERE id=${data.id}`
    db.query(query,(error,results)=>{
        if(error){
            return callback(error)
        }
        return callback(null,results[0])
    })
}

