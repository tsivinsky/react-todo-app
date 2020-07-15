// Import dependencies
import React, { useState, useEffect } from "react";
import useProjects from "./hooks/useProjects";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import queryString from "query-string";

// Import components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

export default function App() {
  // Global store
  const [
    projects,
    { addTodo, completeTodo, removeTodo, moveTodo },
  ] = useProjects();

  const params = queryString.parse(window.location.search);

  // Local states
  const [project, setProject] = useState(() => {
    if (params.id) {
      return projects.find((project) => project._id === params.id);
    } else {
      return projects[0];
    }
  });

  useEffect(() => {
    if (params.id) {
      setProject(projects.find((project) => project._id === params.id));
    } else {
      setProject(projects[0]);
    }
  }, [params.id, projects]);

  const TodoWrapper = SortableElement(({ id, text, completed }) => (
    <Todo
      id={id}
      text={text}
      completed={completed}
      onComplete={(id) => completeTodo(project._id, id)}
      onRemove={(id) => removeTodo(project._id, id)}
    />
  ));

  const Todolist = SortableContainer(() => (
    <div className="todos">
      {project.tasks.map((todo, i) => (
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

  function cancelDragging(e) {
    if (e.target.className.toLowerCase() === "btn-todo-drag") return false;

    return true;
  }

  return (
    <>
      <header>
        <h1 className="title">{project.name}</h1>
        <TodoForm onAdd={(value) => addTodo(project._id, value)} />
      </header>
      <main>
        {project.tasks.length === 0 ? (
          <h2 className="no-todos-message">
            You do not have any tasks. <br />
            It`s a freetime! ⌛
          </h2>
        ) : (
          <Todolist
            onSortEnd={({ oldIndex, newIndex }) =>
              moveTodo(project._id, oldIndex, newIndex)
            }
            lockAxis="y"
            helperClass="todo-dragging"
            shouldCancelStart={cancelDragging}
          />
        )}
      </main>
    </>
  );
}
