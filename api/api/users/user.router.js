import {
  createUser,
  getAllUsers,
  getUserByUserId,
  updateUserById,
  deleteUserById,
  login,
} from "./user.controller.js";
import express from "express";
import { checkToken } from "../../auth/token_validation.js";
const router = express.Router();

router.post("/", checkToken, createUser);
router.get("/", checkToken, getAllUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/:id", checkToken, updateUserById);
router.delete("/:id", checkToken, deleteUserById);
router.post("/login", login);
export default router;
