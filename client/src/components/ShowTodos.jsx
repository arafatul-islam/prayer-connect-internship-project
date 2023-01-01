import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";
import axios from "axios";
import Process from "./Process";

const ShowTodos = () => {
  const { todoArr } = useContext(TodoContext);

  return (
    <div>
      {todoArr.map((todo) => (
        <div
          key={todo._id}
          style={{
            border: "1px solid",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="todo">
            <h5>Title: {todo.title} </h5>
            <p>Description: {todo.description}</p>
          </div>
          <Process todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default ShowTodos;
