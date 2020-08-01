// Import dependencies
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import useTasks from "../hooks/useTasks";

// Import components
import AddTaskButton from "./AddTaskButton";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";

export default function Main() {
  // Global store
  const [tasks, { addTask }] = useTasks();

  // Local states
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <main>
      <Todolist tasks={tasks} />

      <AddTaskButton
        onAdd={() => {
          if (inputValue) {
            addTask(inputValue);
            setInputValue("");
            setShowTodoForm(false);
          } else {
            setShowTodoForm((prev) => !prev);
          }
        }}
      />
      <CSSTransition in={showTodoForm} classNames="todo-form">
        <TodoForm
          value={inputValue}
          onValue={(value) => setInputValue(value)}
        />
      </CSSTransition>
    </main>
  );
}
