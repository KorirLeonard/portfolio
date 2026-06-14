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
    setTimeout(type, 500);
  }
}
type();
