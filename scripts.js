document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const typedText = document.getElementById("typedText");
const phrases = [
  "Full Stack Developer",
  "Business Management",
  "Additive Manufactering Consultant",
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let delay = 200;

function type() {
  if (phraseIndex === phrases.length) {
    phraseIndex = 0;
  }

  if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
    currentPhrase.push(phrases[phraseIndex][letterIndex]);
    letterIndex++;
    typedText.textContent = currentPhrase.join("");
  }

  if (isDeleting && letterIndex >= 0) {
    currentPhrase.pop();
    letterIndex--;
    typedText.textContent = currentPhrase.join("");
  }

  if (letterIndex === phrases[phraseIndex].length) {
    isDeleting = true;
    delay = 100;
  }

  if (letterIndex === 0 && isDeleting) {
    isDeleting = false;
    phraseIndex++;
    delay = 50;
  }

  setTimeout(type, delay);
}

type();
