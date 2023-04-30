import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Type/typeTodo";

export const addTodo = (newTodo) => {
  return {
    type: ADDTODO,
    payload: newTodo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONETODO,
    payload: id,
  };
};
export const editTodo = (id, newText) => {
  return {
    type: EDITTODO,
    payload: { id, newText },
  };
};
