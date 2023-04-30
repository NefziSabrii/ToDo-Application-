import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../Redux/Actions/todoActions";
import Edit from "./Edit";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        width: "80%",
        padding: "20px",
      }}
    >
      <p style={{ color: todo.done ? "red" : null }}>{todo.text}</p>

      <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete{" "}
      </Button>
      <Edit todo={todo} />
      <Button variant="success" onClick={() => dispatch(doneTodo(todo.id))}>
        Done
      </Button>
    </div>
  );
}

export default Todo;
