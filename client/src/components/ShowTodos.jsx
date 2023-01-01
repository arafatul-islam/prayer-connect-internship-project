import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";
import axios from "axios";
import Process from "./Process";

const ShowTodos = () => {
  const { todoArr } = useContext(TodoContext);

  return (
    <div
      style={{
        maxWidth: "720px",
        width: "90%",
        margin: " 0 auto",
      }}
    >
      {todoArr.map((todo) => (
        <div
          key={todo._id}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #e1e1e1",
            backgroundColor: "#e1e1e1",
            margin: "10px 0",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "50%",
            }}
          >
            <h5>Title: {todo.title} </h5>
            <p>Description: {todo.description}</p>
          </div>
          <div style={{ width: "50%" }}>
            <Process todo={todo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTodos;
