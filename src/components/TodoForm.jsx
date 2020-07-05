// Import depedencies
import React from "react";

export default function TodoForm({ onAdd }) {
  // Function for prevent form submitting
  function handleForm(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      onAdd(e.target.value);

      e.target.value = "";
    }
  }

  return (
    <form id="add-todo-form">
      <input
        type="text"
        placeholder="What do you want to do?"
        onKeyDown={handleForm}
      />
    </form>
  );
}
