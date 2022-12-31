import express from "express";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getTodos,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/new", createTodo);
router.put("/:todoid", updateTodo);
router.delete("/:todoid", deleteTodo);
router.get("/:todoid", getTodo);
router.get("/all/todos", getTodos);

export default router;
