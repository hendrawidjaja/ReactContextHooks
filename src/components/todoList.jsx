import React, { useContext } from "react";
import { TodoContext } from "../contexts/todosContext";
import TodoDetails from "./todoDetails";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list">
      <ul>
        {todos.map(todo => {
          return <TodoDetails todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No more task. Hello free time</div>
  );
};
export default TodoList;
