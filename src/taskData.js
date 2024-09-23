// taskData.js

export const initialTasks = [
  { id: "task-1", content: "HomeWork" },
  { id: "task-2", content: "Assignment" },
  { id: "task-3", content: "ClassWork" },
  { id: "task-4", content: "Test Studies" },
  { id: "task-5", content: "Garden Walk" }
];

export const initialColumns = {
  unplanned: {
    name: "Unplanned",
    tasks: initialTasks,
  },
  today: {
    name: "Today",
    tasks: [],
  },
  tomorrow: {
    name: "Tomorrow",
    tasks: [],
  },
  thisWeek: {
    name: "This Week",
    tasks: [],
  },
  nextWeek: {
    name: "Next Week",
    tasks: [],
  },
  
};
