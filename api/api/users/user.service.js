import db from "../../config/db.js";

export function create(data, callback) {
  const { userName, fullName, gender, email, password, number, timeZone } =
    data;
  const query = `INSERT INTO Users(userName,fullName, gender, email,password,number,timeZone) VALUES('${userName}','${fullName}','${gender}','${email}','${password}','${number}','${timeZone}'); `;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

export function getUsers(callback) {
  const query = `SELECT id,userName,fullName, gender, email,password,number,timeZone from Users`;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

export function getUserById(id, callback) {
  const query = `SELECT id,firstName,lastName, gender, email,password,number from Users where id=${id}`;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results[0]);
  });
}

export function updateUser(id, details, callback) {
  //const { firstName, lastName, gender, email, password, number, id } = data;
  var query =
    "UPDATE Users SET firstName=?, lastName=?, gender=?, email=? ,password=?, number=? WHERE id=?";

  db.query(
    query,
    [
      details.firstName,
      details.lastName,
      details.gender,
      details.email,
      details.password,
      details.number,
      id,
    ],
    (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
}

export function deleteUser(id, callback) {
  const query = `delete from Users where id=${id}`;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results[0]);
  });
}

export function getUserByUserEmail(email, callback) {
  const query = "SELECT * from Users where email=?";
  db.query(query, [email], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results[0]);
  });
}
