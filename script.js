// Smooth scrolling
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("confirmationMessage").style.display = "none";
        document.getElementById("contactForm").reset();
    }, 3000);
}

  
