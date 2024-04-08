'use strict'

// Navigation

document.getElementById("plants").addEventListener("click", showPlants);
document.getElementById("hamburger").addEventListener("click", showNav);

function showNav() {
  var element = document.getElementById("nav-items");
  element.classList.toggle("show-items");
}

function showPlants() {
  var plantstuff = document.getElementById("plant-items");
  plantstuff.classList.toggle("show-plants");
}

// Banner text scrolling effect -
document.getElementById("scrollingText").addEventListener("click", function () {
  this.classList.toggle("paused");
});

// Add functionality to accordion

document.addEventListener("DOMContentLoaded", function () {
  // Select all accordion buttons
  var accButtons = document.querySelectorAll(".c-accordion__button");

  // Iterate through each button
  accButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Check if this panel is already open
      var isOpen = this.classList.contains("accordion-active");

      // Use data-target attribute to find the panel
      var panelId = this.getAttribute("data-target");
      var panel = document.getElementById(panelId);

      // First, remove 'active' class from all buttons and close all panels
      accButtons.forEach(function (otherBtn) {
        otherBtn.classList.remove("accordion-active");
      });
      document
        .querySelectorAll(".c-accordion__panel")
        .forEach(function (otherPanel) {
          otherPanel.style.maxHeight = null;
        });

      // Then, if the panel was not already open, open it and add 'active' class
      if (!isOpen) {
        this.classList.add("accordion-active"); // Add 'active' class to the clicked button
        panel.style.maxHeight = panel.scrollHeight + "px"; // Open the panel
      }
    });
  });

  // Automatically open the first panel
  if (accButtons.length > 0) {
    // Force click the first button to open the first panel
    accButtons[0].click();
  }

  // Re-calculate max-height of active panel whenever window size changes to prevent sliding effects when panels expand/collapse
  window.addEventListener("resize", function () {
    document.querySelectorAll(".c-accordion__panel").forEach(function (panel) {
      if (panel.classList.contains("accordion-active")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});

/* Carousel and Pagination - with help from: https://dev.to/cwrcode/create-testimonial-slider-using-html-css-and-javascript-26gg*/

var slideIndex = 0;
var slides = document.getElementsByClassName("c-carousel__item");
var paginationDots = document.getElementsByClassName("c-carousel__dot");

function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  
  // Hide all slides and remove the active class from all dots
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    paginationDots[i].classList.remove("active");
  }
  
  // Display the current slide and highlight the active dot
  slides[slideIndex].classList.add("active");
  paginationDots[slideIndex].classList.add("active");
}

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initially show the first slide
showSlides(slideIndex);

// Add automatic sliding
var slideInterval = setInterval(function() { moveSlide(1); }, 3000); // Change image every 3 seconds

// Stop automatic sliding on mouseover
document.getElementById('carousel').addEventListener('mouseover', function() {
    clearInterval(slideInterval);
  });

  // Resume automatic sliding on mouseout
document.getElementById('carousel').addEventListener('mouseout', function() {
    slideInterval = setInterval(function() { moveSlide(1); }, 3000);
  });