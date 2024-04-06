//Recover useful elements
const button = document.querySelector("button");
const inputField = document.querySelector("input");
const toDoList = document.querySelector(".to-do-list");
const emptyListMessage = document.querySelector(".empty-list-message");

//List of Activities
let activities = [];

showContent();

//Add Event Listener to the button
button.addEventListener("click", function(){
  const newActivity = inputField.value;

  if (newActivity.length > 0) {
    activities.push(newActivity);
    showContent();
    inputField.value = "";
  }
});

function showContent() {
  toDoList.innerText = "";
  emptyListMessage.innerText = "";

  if (activities.length > 0) {
    activities.forEach(function(activity){
      toDoList.innerHTML += `
      <li class="list-item">
        <div class="to-do-check">
          <img src="./img/check.svg" alt="check icon" />
        </div>
        <p class="to-do-text">${activity}</p>
      </li>
      `;
    });

    //Select every to-do-check
    const checks = document.querySelectorAll(".to-do-check");

    //Add Event Listener for each check
    checks.forEach(function(check, index){
      check.addEventListener("click", function(){
        activities.splice(index, 1);
        showContent();
      });
    })
  } else {
    emptyListMessage.innerText = "Sembra non siano presenti attività";
  }
}
