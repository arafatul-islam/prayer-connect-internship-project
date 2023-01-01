import CreateTodo from "./components/CreateTodo";
import ShowTodos from "./components/ShowTodos";
import TodoContextProvider from "./contexts/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <div>
        <CreateTodo />
        <ShowTodos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
