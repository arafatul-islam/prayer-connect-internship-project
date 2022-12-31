import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedTodo = await todo.save();
    return res.status(200).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "error occured white creating a todo" });
  }
};
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoid, req.body, {
      new: true,
    });
    return res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "error occured white updating a todo" });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoid);
    res.status(200).json({ message: "item is deleted" });
  } catch (error) {
    res.status(404).json({ message: "item not found" });
  }
};
export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoid);
    return res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: "item not found" });
  }
};
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: "items not found" });
  }
};
