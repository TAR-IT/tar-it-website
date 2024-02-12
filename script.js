// Define toggleNavbar function
function toggleNavbar() {
  var navbarItems = document.getElementById("navbarItems");
  navbarItems.classList.toggle("show");
}

// Attach event listeners to navbar links
document.addEventListener("DOMContentLoaded", function() {
  // Get all navbar links
  var navbarLinks = document.querySelectorAll('.navbar-items li a');

  // Attach event listener to each link
  navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
          // Close the navbar
          toggleNavbar();
      });
  });
});
