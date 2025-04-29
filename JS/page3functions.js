// Function 1: Validate Book Name input when form is submitted
function validateForm(event){
    event.preventDefault(); // prevent form from actually submitting
    let bookName = document.getElementsByName('book_name')[0].value;
    let messageDiv = document.getElementById('bookNameMessage');

    if (bookName.trim() === "") {
        messageDiv.innerHTML = "Please enter a Book Name.";
    } else {
        messageDiv.innerHTML = ""; // Clear the error if input is valid
        alert("Thank you for your recommendation!");
    }
}


// Function 2: Show a live preview of selected rating
function showRating() {
    let rating = document.getElementsByName('Rating')[0].value;
    document.getElementById('ratingPreview').innerHTML = "You rated this book: " + rating.replace('star', ' star(s)');
}

// Function 3: Change background color if "5 Stars" is selected
function changeBackground() {
    let rating = document.getElementsByName('Rating')[0].value;
    if (rating === "5star") {
        document.body.style.backgroundColor = "#52796F"; 
    } else {
        document.body.style.backgroundColor = "white"; 
    }
}
function resetMessages() {
    // Clear validation or feedback messages
    document.getElementById('bookNameMessage').innerHTML = "";
    document.getElementById('ratingPreview').innerHTML = "";
    document.getElementById('message').innerHTML = "";
    
    // Optional: Reset background color
    document.body.style.backgroundColor = "white";
}

