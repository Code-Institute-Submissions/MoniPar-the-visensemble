// Navigation Hamburger Button //

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

// Read More Read Less Button //

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", () => {
    text.classList.toggle("show--more");
    if (readMoreBtn.innerText === "Read More") {
      readMoreBtn.innerText = "Read Less";
    } else {
      readMoreBtn.innerText = "Read More";
    }
  });

