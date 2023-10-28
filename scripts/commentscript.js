document.addEventListener("DOMContentLoaded", function () {
    const commentsDiv = document.getElementById("comments");
    const commentInput = document.getElementById("commentInput");
    const addCommentButton = document.getElementById("addComment");

    // Function to add a comment to the list
    function addComment() {
        const commentText = commentInput.value;
        if (commentText) {
            const commentElement = document.createElement("p");
            commentElement.textContent = commentText;
            commentsDiv.appendChild(commentElement);
            commentInput.value = "";
        }
    }

    // Add a comment when the button is clicked
    addCommentButton.addEventListener("click", addComment);

    // Add a comment when the Enter key is pressed in the input field
    commentInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addComment();
        }
    });

    // Simulate fetching comments from a server (in a real application, you would fetch data from a database)
    function fetchComments() {
        // You can use AJAX or fetch to retrieve comments from the server
        // For this example, we'll add some initial comments:
        addComment("This is the first comment");
        addComment("Another comment");
    }

    fetchComments();
});
