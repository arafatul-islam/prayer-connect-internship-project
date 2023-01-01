import axios from "axios";
import { useContext, useEffect, useState } from "react";

const Process = ({ todo }) => {
  const [todoProcess, setTodoProcess] = useState(todo.todo);
  const [inProcess, setInProcess] = useState(todo.inProgress);
  const [doneProcess, setDoneProcess] = useState(todo.done);
  const [taskId, setTaskId] = useState(null);
  const update = async (id) => {
    const response = await axios.put(`http://localhost:5000/api/todo/${id}`, {
      todo: todoProcess,
      inProgress: inProcess,
      done: doneProcess,
    });
    console.log(response.data);
  };
  const processChanger = async (e) => {
    const name = e.target.name;
    if (name == "todo") {
      setTodoProcess(() => true);
      setInProcess(() => false);
      setDoneProcess(() => false);
    } else if (name == "inProgress") {
      setTodoProcess(() => false);
      setInProcess(() => true);
      setDoneProcess(() => false);
    } else if (name == "done") {
      setTodoProcess(() => false);
      setInProcess(() => false);
      setDoneProcess(() => true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        name="todo"
        style={
          todoProcess
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          processChanger(e, todo._id);
          update(todo._id);
        }}
      >
        todo
      </button>
      <button
        name="inProgress"
        style={
          inProcess
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          processChanger(e, todo._id);
          update(todo._id);
        }}
      >
        inProgress
      </button>
      <button
        name="done"
        style={
          doneProcess
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          processChanger(e, todo._id);
          update(todo._id);
        }}
      >
        done
      </button>
    </div>
  );
};

export default Process;
