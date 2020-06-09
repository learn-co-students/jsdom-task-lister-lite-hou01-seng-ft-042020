document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskUl = document.getElementById("tasks");
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
    
  function createTodoList() {
    const task = document.createElement("li")
    task.textContent = taskDescription.value
    taskUl.append(task)
    const dlt = document.createElement("button")
    dlt.textContent = "Delete"
    task.append(dlt)
    dlt.addEventListener('click', function(e){
      e.preventDefault();
      task.remove()
    });
  }

  taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    createTodoList()
    taskForm.reset()
  })
});


