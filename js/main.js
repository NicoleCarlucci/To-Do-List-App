//Recover useful elements
const button = document.querySelector("button");
const inputField = document.querySelector("input");
const toDoList = document.querySelector(".to-do-list");
const emptyListMessage = document.querySelector(".empty-list-message");

//List of Activities
let activities = ["Programmare", "Scrivere"];

showContent();

function showContent() {
  toDoList.innerText = "";
  emptyListMessage.innerText = "";
}
