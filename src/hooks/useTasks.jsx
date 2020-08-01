// Import dependencies
import { useState, useEffect } from "react";
import * as uuid from "uuid";
import arrayMove from "array-move";

/*
  Project schema

  _id           string    `Unique id of list`
  name          string    `List's name`
  tasks         array     `Array of tasks ids`
  notes         array     `Array of notes ids`

  Task schema

  _id           string    `Unique id of task`
  text          string    `Text of task`
  completed     boolean   `State of task`
  projects      string    `List id of task`       If it is `null`, this task belongs to Inbox
*/

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks"));
    }

    return [];
  });

  return [
    tasks,
    {
      addTask: function (text = "", projectID = "") {
        const task = {
          _id: uuid.v4(),
          text,
          completed: false,
          project: projectID ? projectID : null,
        };

        setTasks((prev) => [task, ...prev]);
      },
    },
  ];
}
