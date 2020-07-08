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

  // Local states
  const [showMessage, setShowMessage] = useState(true);
  const [showTodos, setShowTodos] = useState(false);

  useEffect(() => {
    if (todos && todos.length > 0) setShowTodos(true);
  }, [todos]);

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
    <TransitionGroup className="todos">
      {todos.map((todo, i) => (
        <CSSTransition key={i} timeout={300} classNames="todo">
          <SortableItem
            index={i}
            id={todo._id}
            text={todo.text}
            completed={todo.completed}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
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
        {showMessage && (
          <h2 className="no-todos-message">
            You do not have any tasks. <br />
            It`s a freetime! ⌛
          </h2>
        )}

        <CSSTransition
          in={showTodos}
          timeout={300}
          classNames="show-todos"
          unmountOnExit
          onEnter={() => setShowMessage(false)}
          onExited={() => setShowMessage(true)}
        >
          <SortableList
            onSortEnd={({ oldIndex, newIndex }) => moveTodo(oldIndex, newIndex)}
            shouldCancelStart={cancelDragging}
            lockAxis="y"
            helperClass="todo-dragging"
          />
        </CSSTransition>
      </main>
    </>
  );
}
