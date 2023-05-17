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

// For index nav bar
const i_navbar = document.getElementById("index-navbar");
const i_navToggle = document.getElementById("index-nav-toggle");

// Add event listener to nav-toggle button
i_navToggle.addEventListener("click", function () {
  if (i_navbar.classList.contains("active")) {
    // If active class is present, remove it
    i_navbar.classList.remove("active");
  } else {
    // If active class is not present, add it
    i_navbar.classList.add("active");
  }
});
