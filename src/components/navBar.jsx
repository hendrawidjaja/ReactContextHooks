import React, { useContext } from "react";
import { TodoContext } from "../contexts/todosContext";

const Navbar = () => {
  const { todos } = useContext(TodoContext);

  function isTodosExist() {
    const len = todos.length;
    const taskStr = len > 1 ? "tasks" : "task";

    return len >= 1 ? (
      <p>
        Currently you have {len} {taskStr} to get through...
      </p>
    ) : null;
  }

  return (
    <div className="navbar">
      <h1>Todo List</h1>
      {isTodosExist()}
    </div>
  );
};

export default Navbar;
