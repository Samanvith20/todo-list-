import { todo } from "../models/todo model.js";

// create a todo
 export const setTodo = async (req, res) => {
    try {
      if (!req.body.text) {
        res.status(400);
        throw new Error('Please add text field');
      }
      const newTodo = await todo.create({
        text: req.body.text,
      });
      res.status(200).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// get all todos

 export const getTodos = (async (req, res) => {
  const todos = await todo.find({});
  res.status(200).json(todos);
})

// delete todo by id
 export const deleteTodo = (async (req, res) => {
  const todo = await todo.findById(req.params.id);
  if (todo) {
    await todo.remove();
    res.status(200).json({ message: 'Todo removed' });
  } else {
    res.status(404);
    throw new Error('Todo not found');
  }
})