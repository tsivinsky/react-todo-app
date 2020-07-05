// Import dependencies
import React from "react";
import useTodos from "./useTodos";

// Import components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  const [todos, addTodo, completeTodo, removeTodo] = useTodos(
    JSON.parse(localStorage.getItem("todos"))
  );

  return (
    <>
      <header>
        <h1 className="title">Todo App</h1>
        <TodoForm
          onAdd={(value) => addTodo({ text: value, completed: false })}
        />
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
                onComplete={(id) => completeTodo(id)}
                onDelete={(id) => removeTodo(id)}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
