//Recover useful elements
const button = document.querySelector("button");
const inputField = document.querySelector("input");
const toDoList = document.querySelector(".to-do-list");
const emptyListMessage = document.querySelector(".empty-list-message");

//Create local storage key
const storageKey = "__bool_todo__";

//List of Activities
let activities = [];

//Check local storage content
const storage = localStorage.getItem(storageKey);

if (storage){
  activities = JSON.parse(storage);
}

showContent();

//Add Event Listener to the button
button.addEventListener("click", function(){
  addActivity();
});

function showContent() {
  toDoList.innerText = "";
  emptyListMessage.innerText = "";

  if (activities.length > 0) {
    activities.forEach(function(activity){
      const template = createActivityTemplate(activity);
      toDoList.innerHTML += template;
    });

    makeCheckClickable();

  } else {
    emptyListMessage.innerText = "Sembra non siano presenti attività";
  }
}

function makeCheckClickable(){
  //Select every to-do-check
  const checks = document.querySelectorAll(".to-do-check");
  //Add Event Listener for each check
  checks.forEach(function(check, index){
    check.addEventListener("click", function(){
      activities.splice(index, 1);

      //Update local storage
      localStorage.setItem(storageKey, JSON.stringify(activities));

      showContent();
    });
  })
}

function addActivity(){
  const newActivity = inputField.value.trim();

  if (newActivity.length > 0) {
    activities.push(newActivity);

    //Update local storage
    localStorage.setItem(storageKey, JSON.stringify(activities));

    showContent();
    inputField.value = "";
  }
}

function createActivityTemplate(activity) {
  return `
  <li class="list-item">
    <div class="to-do-check">
      <img src="./img/check.svg" alt="check icon" />
    </div>
    <p class="to-do-text">${activity}</p>
  </li>
  `;
}
