import React, { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5000/api/todo/all/todos");
      setTodoArr(res.data);
    };
    getTodos();
  }, [todoArr]);
  return (
    <TodoContext.Provider value={{ todoArr, setTodoArr }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
