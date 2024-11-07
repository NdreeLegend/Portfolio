// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Form Validation for Contact Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message (replace with form submission code if needed)
    alert("Thank you for your message, " + firstName + "! I'll get back to you soon.");
    document.getElementById("contact-form").reset();
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
