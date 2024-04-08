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
document.getElementById('scrollingText').addEventListener('click', function() {
    this.classList.toggle('paused');
  });


// Add functionality to accordion

document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion buttons
    var accButtons = document.querySelectorAll('.c-accordion__button');

    // Iterate through each button
    accButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
          // Check if this panel is already open
          var isOpen = this.classList.contains('accordion-active');

          // Use data-target attribute to find the panel
          var panelId = this.getAttribute('data-target');
          var panel = document.getElementById(panelId);

          // First, remove 'active' class from all buttons and close all panels
          accButtons.forEach(function(otherBtn) {
              otherBtn.classList.remove('accordion-active');
          });
          document.querySelectorAll('.c-accordion__panel').forEach(function(otherPanel) {
              otherPanel.style.maxHeight = null;
          });

          // Then, if the panel was not already open, open it and add 'active' class
          if (!isOpen) {
              this.classList.add('accordion-active'); // Add 'active' class to the clicked button
              panel.style.maxHeight = panel.scrollHeight + "px"; // Open the panel
          }
      });
  });

   // Automatically open the first panel
   if(accButtons.length > 0) {
    // Force click the first button to open the first panel
    accButtons[0].click();
   }
});