const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
  }),
);

const texts = ["Graphic Designer", "Web Designer", "Frontend Developer"];
let speed = 100;
let textIndex = 0;
let charIndex = 0;
const typingText = document.querySelector(".span1");

function type() {
  if (charIndex < texts[textIndex].length) {
    typingText.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1000);
  }
}
type();
function erase() {
  if (typingText.textContent.length > 0) {
    typingText.textContent = typingText.textContent.slice(0, -1);
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    charIndex = 0;
    setTimeout(type(), 500);
  }
}

// Initialize EmailJS
emailjs.init("rr4hGJRQy1JOxhee5");

const form = document.getElementById("contact-form");
const btn = document.querySelector(".btn-submit");
const successMsg = document.getElementById("successMsg");

// Show Error
function showError(inputId, errorId, message) {
  document.getElementById(inputId).classList.add("input-error");
  document.getElementById(inputId).classList.remove("input-success");
  document.getElementById(errorId).textContent = message;
}

// Clear Error
function clearError(inputId, errorId) {
  document.getElementById(inputId).classList.remove("input-error");
  document.getElementById(inputId).classList.add("input-success");
  document.getElementById(errorId).textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide success message
  successMsg.style.display = "none";

  // Get Values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();

  let valid = true;

  // Name Validation
  if (name === "") {
    showError("name", "nameError", "Full name is required.");
    valid = false;
  } else {
    clearError("name", "nameError");
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError("email", "emailError", "Email is required.");
    valid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "emailError", "Please enter a valid email address.");
    valid = false;
  } else {
    clearError("email", "emailError");
  }

  // Subject Validation
  if (subject === "") {
    showError("subject", "subjectError", "Please select a subject.");
    valid = false;
  } else {
    clearError("subject", "subjectError");
  }

  // Message Validation
  if (message.length < 10) {
    showError(
      "message",
      "messageError",
      "Message must contain at least 10 characters.",
    );
    valid = false;
  } else {
    clearError("message", "messageError");
  }

  // Stop if validation fails
  if (!valid) return;

  // Disable button
  btn.disabled = true;
  btn.innerHTML = "Sending...";

  // Send Email
  emailjs
    .sendForm("service_jnac27i", "template_1uxy1sn", form)
    .then(() => {
      successMsg.style.display = "block";

      btn.innerHTML = "Message Sent ✓";

      form.reset();

      // Remove green borders
      ["name", "email", "subject", "message"].forEach((id) => {
        document.getElementById(id).classList.remove("input-success");
      });

      setTimeout(() => {
        successMsg.style.display = "none";
        btn.disabled = false;
        btn.innerHTML = "Send Message →";
      }, 5000);
    })
    .catch((error) => {
      console.error(error);

      btn.disabled = false;
      btn.innerHTML = "Send Message →";

      alert("Failed to send message. Please try again.");
    });
});
document.querySelectorAll("input, textarea, select").forEach((field) => {
  field.addEventListener("input", () => {
    // Remove red border
    field.classList.remove("input-error");

    // Add green border (optional)
    field.classList.add("input-success");

    // Clear the error message
    const error = document.getElementById(field.id + "Error");
    if (error) {
      error.textContent = "";
    }
  });
});
// OTHER FEATURES
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
//ANOTHER FEATURE
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
