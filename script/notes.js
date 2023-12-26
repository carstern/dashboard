// Function to save notes to localStorage and update textarea
function saveAndUpdateNotes() {
    const noteInput = document.getElementById('noteInput').value;
    localStorage.setItem('notes', noteInput);
}

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
