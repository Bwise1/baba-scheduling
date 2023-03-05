import {
  create,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUserEmail,
} from "./user.service.js";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import pkg from "jsonwebtoken";
import { config } from "dotenv";
config();

const { sign } = pkg;

export function createUser(req, res) {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  console.log(body);
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "DataBase connection error",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
}

export function getUserByUserId(req, res) {
  const id = req.params.id;
  getUserById(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not found",
      });
    }
    return res.json({
      success: 1,
      data: results,
    });
  });
}

export function getAllUsers(req, res) {
  getUsers((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
}

export function updateUserById(req, res) {
  const id = req.params.id;
  let details = req.body;
  const salt = genSaltSync(10);
  details.password = hashSync(details.password, salt);
  updateUser(id, details, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Failed to update user",
      });
    }
    return res.status(200).json({
      success: 1,
      message: `User with Id:${id} updated succesfully`,
    });
  });
}
export function deleteUserById(req, res) {
  const id = req.params.id;
  deleteUser(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (results) {
      return res.json({
        success: 0,
        message: "Record not found",
      });
    }
    if (!results) {
      return res.json({
        success: 1,
        message: `User with Id:${id} deleted successfully `,
      });
    }
  });
}

export function login(req, res) {
  const body = req.body;
  getUserByUserEmail(body.email, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        data: "Invalid password or email",
      });
    }
    console.log(results);
    console.log(body);
    const result = compareSync(body.password, results.password);
    console.log(result);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.json({
        xuccess: 1,
        message: "login successfully",
        token: jsontoken,
      });
    } else {
      return res.json({
        success: 0,
        message: "Invalid email or password",
      });
    }
  });
}
