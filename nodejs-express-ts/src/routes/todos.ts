import { Router } from "express";

import {
  createTodo,
  getTodo,
  updateTodo,
  deletTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deletTodo);

export default router;
