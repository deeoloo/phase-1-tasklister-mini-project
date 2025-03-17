document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const taskDescription = document.getElementById("new-task-description").value;
  
  const taskItem = document.createElement("li");
  taskItem.textContent = taskDescription;

  taskList.appendChild(taskItem);

  form.reset();})
  // your code here
});


