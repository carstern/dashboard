// Connect to html
const favoriteLinks = document.getElementById("favorite-links");
const modal = document.getElementById("modal-container");
const addLink = document.getElementById("addLink");
const closeModal = document.getElementById("close-modal");


addLink.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});


document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save-modal");
    const inputField = document.querySelector(".modal-body input");
    const favLinks = document.getElementById("fav-links");
  
    saveButton.addEventListener("click", function() {
      const linkValue = inputField.value.trim(); // Get the trimmed value from the input field
      if (linkValue !== "") {
        const newListItem = document.createElement("li"); // Create a new list item
        newListItem.textContent = linkValue; // Set the text content of the list item to the input value
  
        const deleteButton = document.createElement("button"); // Create a delete button
          const icon = document.createElement("i"); // Create an icon element
          icon.className = "fa-solid fa-x"; // FontAwesome icon class for 'times' (an 'X' icon)
          deleteButton.appendChild(icon); // Append the icon to the delete button
          deleteButton.className = "delete-button"; // Assign a class for styling
  
        newListItem.appendChild(deleteButton); // Append the delete button to the list item
        favLinks.appendChild(newListItem); // Append the new list item to the fav-links div
        inputField.value = ""; // Reset the input field value to default after adding
  
        // Add click event listener to delete button
        deleteButton.addEventListener("click", function() {
          favLinks.removeChild(newListItem); // Remove the list item when delete button is clicked
        });
      }
    });
  });
  