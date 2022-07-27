// Navigation Hamburger Button //

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

// Read More Read Less Button //

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show--more");
  if (readMoreBtn.innerText === "READ MORE") {
    readMoreBtn.innerText = "READ LESS";
  } else {
    readMoreBtn.innerText = "READ MORE";  
  }
});

// // Back To Top Button //

const toTop = document.getElementById("backToTop");

// // Show button when user scrolls down 20px from top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollBottom > 100 || document.documentElement.scrollBottom > 100) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

// On click scroll to top
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};




// const toTop = document.querySelector(".back-to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// });
