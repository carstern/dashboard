/* 3. Denna del innehåller länkar som användaren sparat. Användaren kan ta bort länkar (3a) 
        samt lägga till nya (3b). När användaren lägger till nya länkar ska användaren fylla i länken samt en 
        rubrik som denna vill ska synas i dashboarden. Extra utmaning: Hämta länkens favicon och visa som bild i dashboarden.*/

// Connect to html
const favoriteLinks = document.getElementById("fav-links");
const modal = document.getElementById("modal-container");
const addLink = document.getElementById("addLink");
const closeModal = document.getElementById("close-modal");


addLink.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

document.addEventListener("DOMContentLoaded", function () {
  const favLinks = document.getElementById("fav-links");
  const modal = document.getElementById("modal-container");
  const addLink = document.getElementById("addLink");
  const closeModal = document.getElementById("close-modal");

  addLink.addEventListener("click", function () {
    modal.classList.add("show-modal");
  });

  closeModal.addEventListener("click", function () {
    modal.classList.remove("show-modal");
  });

  

  // Function to load items from localStorage
  function loadItemsFromStorage() {
    const savedItems = localStorage.getItem("favLinks");
    if (savedItems) {
      favLinks.innerHTML = savedItems;
      setDeleteButtonListeners(); // Set listeners for delete buttons on loaded items
    }
  }

  // Function to set listeners for delete buttons
  function setDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const listItem = button.closest("li"); // Find the closest <li> parent
        const favLinks = document.getElementById("fav-links");
  
        if (listItem && favLinks.contains(listItem)) {
          favLinks.removeChild(listItem); // Remove if it's a child of fav-links
          updateLocalStorage(); // Update localStorage after removing item
        }
      });
    });
  }
  
  

  // Function to collect links if there is any in localStorage
  function updateLocalStorage() {
    localStorage.setItem("favLinks", favLinks.innerHTML);
  }
  loadItemsFromStorage();

  const saveButton = document.getElementById("save-modal");
  const inputField = document.querySelector(".modal-body input");

  saveButton.addEventListener("click", function () {
    const linkValue = inputField.value.trim(); 
    if (linkValue !== "") {
      const newListItem = document.createElement("li"); // Create a new list item if the input field is not empty
  
      // Create an anchor element for the URL
      const link = document.createElement("a");
      link.href = linkValue; // Set the URL as the href attribute
      link.textContent = linkValue; // Set the displayed text of the link
      
      newListItem.appendChild(link); // Append the link to the list item
  
      // Create the delete button with an icon next to the link
      const deleteButton = document.createElement("button"); 
      const icon = document.createElement("i"); 
      icon.className = "fa-solid fa-x";
      deleteButton.appendChild(icon);
      deleteButton.classList = "delete-button"; 
  
      // Append the delete button to the list item
      newListItem.appendChild(deleteButton);
  
      // Append the list item to the favLinks div
      favLinks.appendChild(newListItem); 
      favLinks.classList = "fav-links";
      inputField.value = ""; // Reset the input field value to default after adding
  
      updateLocalStorage(); 
      setDeleteButtonListeners(); 
    }
  });
  
});

//Load icons if links contain known domain.
