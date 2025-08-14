// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Validation and Response
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('formResponse');

    if (name === "" || email === "" || message === "") {
        response.textContent = "Please fill out all fields.";
        response.style.color = "red";
    } else {
        response.textContent = "Thanks for your message!";
        response.style.color = "green";
        this.reset();
    }
});
