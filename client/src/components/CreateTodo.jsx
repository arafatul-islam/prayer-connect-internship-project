import axios from "axios";
import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/todo/new", {
        title: title,
        description: desc,
      });
      console.log(response.data);
      setTile("");
      setDesc("");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <form onSubmit={createTodo}>
      <div>
        <input
          placeholder="todo"
          name="title"
          value={title}
          onChange={(e) => setTile(() => e.target.value)}
          style={{ padding: "10px", outline: "none" }}
        />
        <input
          placeholder="todo description"
          name="description"
          value={desc}
          onChange={(e) => setDesc(() => e.target.value)}
          style={{ padding: "10px", outline: "none" }}
        />
      </div>
      <button>create todo</button>
    </form>
  );
};

export default CreateTodo;
