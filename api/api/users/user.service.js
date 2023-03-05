import db from "../../config/db.js";

export function create(data, callback) {
  const { firstName, lastName, gender, email, password, number } = data;
  const query = `INSERT INTO registration(firstName,lastName, gender, email,password,number) VALUES('${firstName}','${lastName}','${gender}','${email}','${password}','${number}'); `;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

export function getUsers(callback) {
  const query = `SELECT id,firstName,lastName, gender, email,password,number from registration`;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

export function getUserById(id, callback) {
  const query = `SELECT id,firstName,lastName, gender, email,password,number from registration where id=${id}`;
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
    "UPDATE registration SET firstName=?, lastName=?, gender=?, email=? ,password=?, number=? WHERE id=?";

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
  const query = `delete from registration where id=${id}`;
  db.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results[0]);
  });
}

export function getUserByUserEmail(email, callback) {
  const query = "SELECT * from registration where email=?";
  db.query(query, [email], (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results[0]);
  });
}
