// Import dependencies
import { useState, useEffect } from "react";
import * as uuid from "uuid";
import arrayMove from "array-move";

/*
  Project schema:
  _id         String
  name        String
  tasks       Array   `Array of tasks`
  owner       String  `User's _id. Only for authorized users`


  Task schema:
  _id         String  `uuid.v4()`
  text        String
  completed   Boolean
*/

export default function useProjects() {
  const [projects, setProjects] = useState(() => {
    if (localStorage.getItem("projects")) {
      return JSON.parse(localStorage.getItem("projects"));
    } else {
      return [
        {
          _id: uuid.v4(),
          name: "My Tasks",
          tasks: [],
          owner: localStorage.getItem("user")
            ? localStorage.getItem("user")
            : null,
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Function for finding project by id
  function findProjectByID(id = "") {
    return projects.find((project) => project._id === id);
  }

  // Function for saving project in store
  function saveProject(project = {}, id = "") {
    setProjects((prev) =>
      prev.map((projectInStore) =>
        projectInStore._id === id ? { ...project } : { ...projectInStore }
      )
    );
  }

  return [
    projects,
    {
      saveProjectName: function (id = "", newName = "") {
        const project = findProjectByID(id);

        // Update project name
        project.name = newName;

        saveProject(project, id);
      },
    },
    {
      addTodo: function (projectID = "", text = "") {
        // Find project by id
        const project = findProjectByID(projectID);

        // Push task object into project
        project.tasks.unshift({
          _id: uuid.v4(),
          text,
          completed: false,
          owner: null,
        });

        // Save projects
        saveProject(project, projectID);
      },
      completeTodo: function (projectID = "", taskID = "") {
        // Find project by id
        const project = findProjectByID(projectID);

        // Change completed prop in task object
        project.tasks = project.tasks.map((task) =>
          task._id === taskID
            ? { ...task, completed: !task.completed }
            : { ...task }
        );

        // Save project in store
        saveProject(project, projectID);
      },
      removeTodo: function (projectID = "", taskID = "") {
        // Find project by id
        const project = findProjectByID(projectID);

        // Remove task with this id from array
        project.tasks = project.tasks.filter((task) => task._id !== taskID);

        // Save project in store
        saveProject(project, projectID);
      },
      moveTodo: function (projectID = "", oldIndex = 0, newIndex = 1) {
        // Find project by id
        const project = findProjectByID(projectID);

        // Move tasks
        project.tasks = arrayMove(project.tasks, oldIndex, newIndex);

        // Save project in store
        saveProject(project, projectID);
      },
    },
  ];
}
