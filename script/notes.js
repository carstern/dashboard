/* 6. I den här delen ska användaren kunna skriva snabba anteckningar. 
 Tänk en stor textarea bara där det som skrivs sparas hela tiden. 
 Det ska inte finnas flera olika anteckningar utan bara just en yta.*/

// Function to save notes to localStorage and update textarea
function saveAndUpdateNotes() {
    const noteInput = document.getElementById('noteInput').value;
    localStorage.setItem('notes', noteInput);
}

// Function to copy notes to clipboard
function copyToClipboard() {
    const noteInput = document.getElementById('noteInput');
    noteInput.select();
  
    const selectedText = noteInput.value;
    navigator.clipboard.writeText(selectedText);
  };
  
// Display existing notes on page load
function displayNotes() {
    const notes = localStorage.getItem('notes');
    if (notes) {
        document.getElementById('noteInput').value = notes;
    }
}

// Event listener for any changes in the note input
const noteInput = document.getElementById('noteInput');
noteInput.addEventListener('input', saveAndUpdateNotes);

// Display existing notes on page load
displayNotes();

// Event listener for the "Copy to Clipboard" button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyToClipboard);
