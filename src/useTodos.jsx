// Import dependencies
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions";

export default function useTodos(prevTodos) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Load todos
  useEffect(() => {
    if (prevTodos) {
      dispatch({ type: actions.LOAD_TODOS, payload: prevTodos });
    }
  }, []);

  // Save todos in localStorage after each modification
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [
    todos,
    // Function for adding new todos
    function (todo = {}) {
      dispatch({ type: actions.ADD_TODO, payload: todo });
    },
    // Function for completing todos
    function (todoID = 1) {
      dispatch({ type: actions.TOGGLE_TODO, payload: todoID });
    },
    // Function for removing todos
    function (todoID = 1) {
      dispatch({ type: actions.REMOVE_TODO, payload: todoID });
    },
    // Function for load todos
    function (todos = []) {
      dispatch({ type: actions.LOAD_TODOS, payload: todos });
    },
  ];
}
