document.addEventListener("DOMContentLoaded", () => {
    
    

    const form = document.querySelector('form');
    let priorityOptions = ["high","medium","low"];
    // An additional input field (e.g. user, duration, date due)

    // const dueDate = document.createElement('form');
    // dueDate.id = "set-due-date";

    var dueDateInput = document.createElement("INPUT");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("value", "Due Date");
    dueDateInput.setAttribute("id", "due-date");
    form.append(dueDateInput);

    // form.append(dueDate);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputtedTaskDescription = document.querySelector('#new-task-description').value;
      const taskList = document.querySelector('#tasks');
      const inputtedDueDate = document.getElementById('due-date');

console.log(inputtedDueDate.value)
      const newLi = document.createElement('li');
      const liDiv = document.createElement('div');
      liDiv.classList= 'task-item';
      liDiv.textContent = `${inputtedTaskDescription}`;
      // Ability to edit tasks
      liDiv.contentEditable = 'true';

      const buttonDiv = document.createElement('div');
      buttonDiv.classList= 'edit-button';
      const btn = document.createElement('button');
      btn.innerHTML = 'Delete';



      buttonDiv.append(btn);
      liDiv.append(buttonDiv);
      taskList.append(liDiv);

      // A delete function that will remove tasks from your list
      btn.addEventListener('click', function (e) {
       event.currentTarget.parentNode.parentNode.remove();
      });

      form.reset(); // clear the inputs in the form
    });

    // A priority value selected from a dropdown that is used to 
    // determine the color of the text in the list 
    // (e.g. red for high priority, yellow for medium, green for low)


    // As a challenge, implement a sorting functionality that displays 
    // the tasks ascending or descending order based on priority
});
