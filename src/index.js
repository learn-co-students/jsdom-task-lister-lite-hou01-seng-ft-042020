document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const postTask = () => {
    const form = document.querySelector('form')
    const input = document.getElementById("new-task-description")
    const taskList = document.querySelector("ul") 

    form.addEventListener('submit', (e) => {
      const taskForm = document.createElement("form")
      const task = document.createElement("li")
      const deleteButton = document.createElement("input")
      taskForm.addEventListener('submit', e => {
        e.target.remove()
        console.log('click')
      })
      deleteButton.value = "delete"
      deleteButton.type = "submit"
      task.innerText = input.value
      taskForm.append(task, deleteButton)
      taskList.append(taskForm)
      e.preventDefault()
    })
  }
  postTask()



});
