// ______ DASHBOARD CHANGE-TITLE FUNCTIONALITY _______\\
// Connect to html
const dashboardTitle = document.getElementById("dashboard-title");

// Check localstorage for dashboard title.
window.addEventListener("load", function () {
  const isStored = localStorage.getItem("dashboardTitle");
  if (isStored) {
    dashboardTitle.value = isStored;
  }
});

// New input added to localStorage
dashboardTitle.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    saveNewTitle();
  }
});

// Save the input as new dashboard title
function saveNewTitle() {
  const enteredTitle = dashboardTitle.value;
  localStorage.setItem("dashboardTitle", enteredTitle);
}
// _______ END DASHBOARD TITLE _______ \\


// Google custom tag 
const jokeBtn = document.getElementById('joke-button');
jokeBtn.addEventListener('click', function(){
  gtag('event')
})