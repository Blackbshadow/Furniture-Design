// JavaScript to handle the contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (name && email && message) {
        // Display confirmation message
        document.getElementById("confirmationMessage").textContent = "Thank you, " + name + "! Your message has been sent.";
        
        // Clear form fields
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
