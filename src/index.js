document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function createList(comment) {
const list = document.createElement('li')
list.textContent=comment; 

const todo= document.querySelector("ul");
todo.append(list);
}

const form=document.querySelector("form")

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const comment= document.querySelector('#new-task-description').value;

  createList(comment);
  form.reset(); 
});
