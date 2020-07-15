// Import dependencies
import React from "react";
import useTodos from "./hooks/useTodos";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

// Import components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  // Global state
  const [todos, addTodo, completeTodo, removeTodo, moveTodo] = useTodos();

  const TodoWrapper = SortableElement(({ id, text, completed }) => (
    <Todo
      id={id}
      text={text}
      completed={completed}
      onComplete={(id) => completeTodo(id)}
      onRemove={(id) => removeTodo(id)}
    />
  ));

  const Todolist = SortableContainer(() => (
    <div className="todos">
      {todos.map((todo, i) => (
        <TodoWrapper
          key={i}
          index={i}
          id={todo._id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  ));

  return (
    <>
      <header>
        <h1 className="title">Todo App</h1>
        <TodoForm onAdd={(value) => addTodo(value)} />
      </header>
      <main>
        {todos.length === 0 ? (
          <h2 className="no-todos-message">
            You do not have any tasks. <br />
            It`s a freetime! ⌛
          </h2>
        ) : (
          <Todolist
            onSortEnd={({ oldIndex, newIndex }) => moveTodo(oldIndex, newIndex)}
            lockAxis="y"
            helperClass="todo-dragging"
            useDragHandle
          />
        )}
      </main>
    </>
  );
}
