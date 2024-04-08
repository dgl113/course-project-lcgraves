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