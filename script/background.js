// _______ BACKGROUND IMAGE ______ \\
const randomPic = document.querySelector("#swtichBg");
const keyword = document.querySelector("#keyword");

randomPic.addEventListener("click", () => randomize());

if (!localStorage.getItem("randomURL")) {
  document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1497752531616-c3afd9760a11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDY0NTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDM4ODQyOTB8&ixlib=rb-4.0.3&q=85')";
} else {
  const randomURL = JSON.parse(localStorage.getItem("randomURL"));
  document.body.style.backgroundImage = `url("${randomURL}")`;
}

async function randomize() {
  const query = keyword.value !== "" ? keyword.value : "animals"; // Default query if user input is empty
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=rkSeKPVVUyB4tduVp36cQKnRHO9tvCENNaIQBkJluYE&query=${query}`
  );

  if (response.ok) {
    const data = await response.json();
    document.body.style.backgroundImage = `url("${data.urls.full}")`;
    document.body.style.backgroundSize = "cover"; // Set the background size to contain
    document.body.style.backgroundAttachment = "fixed"; // Optional: Set the background attachment to fixed for a fixed background
    localStorage.setItem("randomURL", JSON.stringify(data.urls.full)); // Store the URL as a string
  }
}

