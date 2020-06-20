document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const newOpt = document.createElement('input')
  newOpt.setAttribute('type', 'text')
  newOpt.setAttribute('id', 'duration')
  // newOpt.id = "duration"
  newOpt.setAttribute('name', 'duration')
  newOpt.setAttribute('placeholder', 'duration')
  form.append(newOpt)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#new-task-description').value
    const duration = document.querySelector('#duration').value
    let tasks = document.querySelector('#tasks')
    li = document.createElement('li')
    li.innerText = `${input} - ${duration}`
    li.setAttribute('class', 'red')
    tasks.append(li)

    // form.clear()

    li.addEventListener('click', () => {
      method: 'DELETE',
    
      li.remove()
    })

    

  })


  const colors = ['red', 'green', 'blue']
  const div = document.querySelector('div')
  const drop = document.createElement('select')
  drop.name = "colors"
  drop.id = "colors" 
  for (const col of colors) {
    const option = document.createElement('option')
    option.value = col
    option.text = col.charAt(0).toUpperCase() + col.slice(1)
    
    drop.append(option)
  }

  const label = document.createElement('label')
  label.innerHTML = "Choose a color"
  label.htmlFor = "colors"
  div.append(drop, label)

});
