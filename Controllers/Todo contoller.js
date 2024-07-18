import mongoose from "mongoose";
import { todo as TodoModel } from "../models/todo model.js";

// create a todo
export const setTodo = async (req, res) => {
  try {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    const newTodo = await TodoModel.create({
      text: req.body.text,
    });
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all todos
export const getTodos = async (req, res) => {
  const todos = await TodoModel.find({});
  res.status(200).json(todos);
};

// delete todo by id


export const deleteTodo = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    const result = await TodoModel.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Todo removed' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: error.message });
  }
};

