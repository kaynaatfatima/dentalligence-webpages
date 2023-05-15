// Get the navbar and nav-toggle button elements
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");

// Add event listener to nav-toggle button
navToggle.addEventListener("click", function () {
  if (navbar.classList.contains("active")) {
    // If active class is present, remove it
    navbar.classList.remove("active");
  } else {
    // If active class is not present, add it
    navbar.classList.add("active");
  }
});
