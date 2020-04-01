document.addEventListener("DOMContentLoaded", () => {
    console.log("It's all gucci");
})


const taskButton = document.getElementById("submit");




taskButton.addEventListener("click", () => {
    event.preventDefault();
    const userInput = document.getElementById("new-task-description").value;
    if (userInput.length != 0) {
      let currentList = document.getElementById("tasks");
      let priority = document.getElementById("new-task-priority");
      let priorityColor = priority.options[priority.selectedIndex].value;
      let newTask = document.createElement("li")
      let deleteButton = document.createElement("BUTTON");
      deleteButton.innerText = "x";
      newTask.innerText = userInput;
      newTask.style.color = priorityColor;
      newTask.appendChild(deleteButton);
      currentList.appendChild(newTask);
      deleteButton.addEventListener("click", () => {
        event.preventDefault();
        currentList.removeChild(newTask)
      })
      
    }
  });


  }
