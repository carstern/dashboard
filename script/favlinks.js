/* 3. Denna del innehåller länkar som användaren sparat. Användaren kan ta bort länkar (3a) 
        samt lägga till nya (3b). När användaren lägger till nya länkar ska användaren fylla i länken samt en 
        rubrik som denna vill ska synas i dashboarden. Extra utmaning: Hämta länkens favicon och visa som bild i dashboarden.*/

//MODAL
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

  // END MODAL

  // FAVORITE LINKS
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
          favLinks.removeChild(listItem); // Remove if it's a child of fav-links - Had issues with removechild but with the && above I could compare and remove.
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
    const [nameInput, urlInput] = [...document.querySelectorAll(".modal-body input")].map(input => input.value.trim());

    
    if (nameInput !== "" && urlInput !== "") {
      const currentLinks = favLinks.querySelectorAll("li").length;
  
      // Add limit of 5 links
      if (currentLinks >= 5) {
        alert("Sorry, you can only add 5 links.");
        return; // Stop execution if the limit is reached
      }
  
      const newListItem = document.createElement("li");
  
      // Create and append the icon based on the URL
      const icon = createIconElement(urlInput);
      newListItem.appendChild(icon);
      
      const nameLink = document.createElement("a");
      nameLink.href = "#"; // Update the href to point to a hash initially
      nameLink.textContent = nameInput;
      
      nameLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action (navigating to a hash)
        window.open(urlInput, "_blank");
      });
      
      newListItem.appendChild(nameLink);
      
      // Create the delete button with an icon next to the link
      const deleteButton = document.createElement("button");
      const deletebtn = document.createElement("i");
      deletebtn.className = "fa-solid fa-x";
      deleteButton.appendChild(deletebtn);
      deleteButton.classList = "delete-button";
      
      // Appending the button and links
      newListItem.appendChild(deleteButton);   
      favLinks.appendChild(newListItem); 
      favLinks.classList = "fav-links";
  
      
 document.querySelectorAll(".modal-body input").forEach(input => {
  input.value = "";}); // Clear inputfields 
  
      updateLocalStorage();
      setDeleteButtonListeners();

      modal.classList.remove("show-modal"); // Closing the modal after saving a new link
    }
  });
});
    
  // END FAVORIT LINKS

  // ADD ICONS TO LINKS BASED ON MATCHING WORDS - Couldn't get it working with any icons except the X...
  function createIconElement(linkValue) {
    const iconClasses = {
      google: "fa-brands fa-google", // When I use "fa-solid fa-x" the icon works.. 
      github: "fa-brands fa-github",
      hemnet: "fa-solid fa-home",
      default: "fa-solid fa-face-smile"
    };
  
    for (const keyword in iconClasses) {
      if (linkValue.includes(keyword)) {
        const icon = document.createElement("i");
        icon.className = iconClasses[keyword];
        return icon;
      }
    }
  
    // If no keyword matches, return the default icon
    const defaultIcon = document.createElement("i");
    defaultIcon.className = iconClasses.default;
    return defaultIcon;
  }
  // END ADD ICONS TO LINKS BASED ON MATCHING WORDS