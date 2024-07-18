import { Router } from "express";

import { deleteTodo, getTodos,setTodo } from "../Controllers/Todo contoller.js";
const router=Router()


router.route("/get").get( getTodos)
router.route("/").post(setTodo)
router.route("/:id").delete(deleteTodo)
export default router;