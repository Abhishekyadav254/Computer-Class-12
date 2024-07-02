function addTask() {
  const newTaskInput = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  if (newTaskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
              <span>${newTaskInput.value}</span>
              <button onclick="completeTask(this)">Complete</button>
              <button onclick="removeTask(this)">Remove</button>
          `;
    taskList.appendChild(taskItem);

    newTaskInput.value = "";
  }
}

function completeTask(button) {
  const taskItem = button.parentElement;
  taskItem.children[0].className = "scripted";
}
function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

//  !todo Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// Taking input from the user
let userInput = prompt("Enter the text:");

// convering text into array
let userInputArray = Array.from(userInput);

let requiredArray = userInputArray.map((element) => element.toLowerCaseLo)

console.log(userInputArray);
