import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Type/typeTodo";

const initialState = {
  todos: [
    { text: "voyage en italie", id: 1, done: false },
    { text: "voyage en espagne", id: 2, done: false },
  ],
};

const todoReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case DONETODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case EDITTODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.newText } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducers;
