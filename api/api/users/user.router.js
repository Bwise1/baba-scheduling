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

router.post("/step1page", createUser);
router.get("/", getAllUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/:id", checkToken, updateUserById);
router.delete("/:id", checkToken, deleteUserById);
router.post("/login", login);
export default router;
