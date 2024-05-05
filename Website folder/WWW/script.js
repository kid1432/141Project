function validateForm() {
    let textArea = document.forms[0]["journalEntry"].value;
    if (textArea === "") {
        alert("You must write something in your journal!");
        return false;
    }
    return true;
}



function validateLogin() {
    let username = document.forms[0]["username"].value;
    let password = document.forms[0]["password"].value;
    if (username === "" || password === "") {
        alert("Both username and password are required!");
        return false;
    }
    return true;
}



document.getElementById('journalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let journalEntry = document.getElementById('journalEntry').value;
    if (journalEntry.trim() === '') {
        alert("Please write something in your journal before saving.");
        return;
    }
    displayEntry(journalEntry);
    document.getElementById('journalEntry').value = ''; // Clear the textarea after saving
});

function displayEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('journal-entry');
    entryDiv.textContent = entry;
    document.getElementById('entries').appendChild(entryDiv);
}