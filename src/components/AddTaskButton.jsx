// Import dependencies
import React from "react";

export default function AddTaskButton({ onAdd }) {
  function buttonClick(e) {
    const svg = document.querySelector("svg.btn-new-task");
    svg.classList.toggle("rotated");

    onAdd();
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="btn-new-task"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#e3e9f0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={buttonClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
