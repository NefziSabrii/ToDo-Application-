import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function ListTodo() {
  const todos = useSelector((state) => state.todoReducers.todos);

  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default ListTodo;
