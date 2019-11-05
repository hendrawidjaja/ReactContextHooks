import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";
export const TodoContext = createContext();

const TodoContextProvider = props => {
  const localDataName = "todos";
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    /* App start, Search the localStorage first, get the value, pass it to array */
    const localData = localStorage.getItem(localDataName);
    return localData ? JSON.parse(localData) : [];
  });

  /* Everytime app refresh, this got called */
  useEffect(() => {
    localStorage.setItem(localDataName, JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
