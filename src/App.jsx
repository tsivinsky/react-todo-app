// Import dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions";

// Import components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Get todos from localStorage on the first load
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      dispatch({ type: actions.LOAD_TODOS, payload: todos });
    }
  }, []);

  // Save todos when user reload or leave the page
  window.onbeforeunload = function () {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Function for add new todos
  function addTodo(e) {
    e.preventDefault();

    // Get todo text from DOM
    const taskNode = document.querySelector("#add-todo-form input");

    // Create task object
    const task = {
      text: taskNode.value,
      completed: false,
    };

    // Save task in global store
    dispatch({ type: actions.ADD_TODO, payload: task });

    // Reset input value
    taskNode.value = "";
  }

  // Function for complete todo
  const completeTodo = (id) =>
    dispatch({ type: actions.TOGGLE_TODO, payload: id });

  // Function for delete todo
  const deleteTodo = (id) =>
    dispatch({ type: actions.REMOVE_TODO, payload: id });

  return (
    <>
      <header>
        <h1 className="title">Todo App</h1>
        <TodoForm onAdd={addTodo} />
      </header>
      <main>
        {todos.length === 0 ? (
          <h2 className="no-todos-message">
            You do not have any tasks. <br />
            It`s a freetime! ⌛
          </h2>
        ) : (
          <div className="todos">
            {todos.map((todo, i) => (
              <Todo
                key={i}
                id={todo._id}
                text={todo.text}
                completed={todo.completed}
                count={
                  todos.length === 2
                    ? "none"
                    : i === 0
                    ? "first"
                    : i === todos.length - 1
                    ? "last"
                    : "none"
                }
                onComplete={completeTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
