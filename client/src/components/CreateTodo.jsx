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
    <form
      onSubmit={createTodo}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <label>Title:</label>
        <input
          placeholder="todo"
          name="title"
          value={title}
          onChange={(e) => setTile(() => e.target.value)}
          style={{ padding: "10px", outline: "none", width: "50%" }}
        />
        <label>Description: </label>
        <input
          placeholder="todo description"
          name="description"
          value={desc}
          onChange={(e) => setDesc(() => e.target.value)}
          style={{ padding: "10px", outline: "none", width: "50%" }}
        />
      </div>
      <button
        style={{
          marginLeft: "10px",
          padding: "8px",
          textTransform: "capitalize",
        }}
      >
        create todo
      </button>
    </form>
  );
};

export default CreateTodo;
