document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit", createNewTask);
});

const createNewTask = (event) => {
  event.preventDefault();
  const taskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;
  addNewTask(newTask);
  event.target.reset();
};

const addNewTask = (task) => {
  document.getElementById("tasks").append(task);
};
