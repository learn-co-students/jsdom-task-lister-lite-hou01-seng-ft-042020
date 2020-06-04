document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function createTodoList(desc){
    const li = document.createElement('li')
    const ul = document.getElementById("tasks");
    li.textContent = desc;
    ul.append(li);
    const btn = document.createElement('button');
    btn.textContent = 'X'
    li.append(btn);
    btn.addEventListener('click', function(e){
      e.preventDefault();
      li.remove();
    });
  }

  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const list = document.getElementById("new-task-description").value;
    createTodoList(list);
    form.reset();
  });

});
