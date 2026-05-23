// script.js

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    addTask();
  }
});

function addTask(){

  const taskText = taskInput.value.trim();

  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Button container
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  // Append text and buttons
  li.appendChild(span);
  li.appendChild(btnContainer);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}