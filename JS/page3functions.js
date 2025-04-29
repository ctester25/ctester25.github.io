<script>
// Function 1: Validate Book Name input when form is submitted
function validateForm(event){
    event.preventDefault(); // prevent form from actually submitting
    let bookName = document.getElementsByName('book_name')[0].value;
    if (bookName.trim() === "") {
        document.getElementById('message').innerHTML = "❗ Please enter a Book Name.";
    } else {
        document.getElementById('message').innerHTML = "✅ Thank you for your recommendation!";
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
        document.body.style.backgroundColor = "#d4edda"; // light green
    } else {
        document.body.style.backgroundColor = "white"; 
    }
}
</script>
