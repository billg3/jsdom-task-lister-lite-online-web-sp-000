document.addEventListener("DOMContentLoaded", () => {


  document.addEventListener('submit', (event) => {
//
      event.preventDefault()
//
 // const taskList = new TaskList();

//create
    ul = document.querySelector('#tasks')
    li = document.createElement('li');
    taskInput = document.querySelector('#new-task-description').value
//
    li.textContent = taskInput;
    abc = ul.appendChild(li);
//
    document.querySelector('#create-task-form').reset();
//

      // ul.addEventListener("click", (e) => {
      //   if (e.target.nodeName === "BUTTON") {
      //     taskList.deleteTask(e.target.dataset.description);
      //     renderApp();
      //   }
      // });
      //


  })
});
