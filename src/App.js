import React from "react";
import TodoContextProvider from "./contexts/todosContext";
import Navbar from "./components/navBar";
import TodoList from "./components/todoList";
import NewTodoForm from "./components/todoForm";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
        <NewTodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
