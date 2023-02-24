import db from '../../config/db.js'

export default function create(data, callback) {
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






