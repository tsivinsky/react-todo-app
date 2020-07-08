// Import dependencies
import React, { useEffect, useState } from "react";
import useTodos from "./hooks/useTodos";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

// Import components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  // Global state
  const [todos, addTodo, completeTodo, removeTodo, moveTodo] = useTodos();

  const SortableItem = SortableElement(({ id, text, completed }) => (
    <Todo
      id={id}
      text={text}
      completed={completed}
      onComplete={(id) => completeTodo(id)}
      onDelete={(id) => removeTodo(id)}
    />
  ));

  const SortableList = SortableContainer(() => (
    <div className="todos">
      {todos.map((todo, i) => (
        <SortableItem
          index={i}
          id={todo._id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  ));

  function cancelDragging(e) {
    if (["span", "h3"].indexOf(e.target.tagName.toLowerCase()) !== -1)
      return true;
  }

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
          <SortableList
            onSortEnd={({ oldIndex, newIndex }) => moveTodo(oldIndex, newIndex)}
            shouldCancelStart={cancelDragging}
            lockAxis="y"
            helperClass="todo-dragging"
          />
        )}
      </main>
    </>
  );
}
