document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskUl = document.getElementById("tasks");

  taskForm.addEventListener("submit", createNewTask);
});

function createNewTask(event) {
  event.preventDefault();
  const taskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;
  addNewTask(newTask);
  event.target.reset();
}

function addNewTask(task) {
  document.getElementById("tasks").append(task);
}
