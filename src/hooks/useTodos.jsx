// Import dependencies
import { useState, useEffect } from "react";
import * as uuid from "uuid";
import arrayMove from "array-move";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos"));
    }

    return [];
  });

  // Save todos in localStorage when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [
    todos,
    // Function for adding new todo
    function (text = "") {
      setTodos((prev) => [{ _id: uuid.v4(), text, completed: false }, ...prev]);
    },
    // Function for completing todo
    function (todoID) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo._id === todoID ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    // Function for removing todo
    function (todoID) {
      setTodos((prev) => prev.filter((todo) => todo._id !== todoID));
    },
    // Function for moving todo
    function (oldIndex, newIndex) {
      const newTodos = arrayMove(todos, oldIndex, newIndex);
      setTodos(newTodos);
    },
  ];
}
