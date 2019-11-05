import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/todosContext";

const NewTodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: {
        title
      }
    });

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo that need attention"
        value={title}
        onChange={e => {
          setTodo(e.target.value);
        }}
        required
      />

      <input type="submit" value="Add Todo" />
    </form>
  );
};
export default NewTodoForm;
