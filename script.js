// Define toggleNavbar function
function toggleNavbar() {
  var navbarItems = document.getElementById("navbarItems");
  navbarItems.classList.toggle("show");
}

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

  // Get all the navbar items
  const navbarItems = document.querySelectorAll(".navbar-item");

  // Variable to store the currently highlighted navbar item
  let currentHighlightedItem = null;

  // Function to highlight the active navbar item
  function highlightNavbarItem() {
    let previousHighlightedItem = currentHighlightedItem; // Store the previously highlighted item
    let isItemHighlighted = false; // Flag to check if any item is highlighted

    // Loop through all the navbar items
    navbarItems.forEach(navbarItem => {
      // Get the ID of the section corresponding to the navbar item
      const sectionId = navbarItem.querySelector('a').getAttribute('href').substring(1);

      // Get the corresponding section
      const section = document.getElementById(sectionId);

      // Check if the section is in the viewport
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      const isInViewport = sectionBottom > window.scrollY && sectionTop < window.scrollY + window.innerHeight;

      // Add or remove a class to highlight the active navbar item
      if (isInViewport) {
        navbarItem.classList.add('active');
        currentHighlightedItem = navbarItem; // Update the currently highlighted item
        isItemHighlighted = true;
      } else {
        navbarItem.classList.remove('active');
      }
    });

    // Remove highlight from the previously highlighted item if a new item is highlighted
    if (previousHighlightedItem && !isItemHighlighted) {
      previousHighlightedItem.classList.remove('active');
    }
  }

  // Highlight the active navbar item on page load
  highlightNavbarItem();

  // Highlight the active navbar item on scroll
  window.addEventListener('scroll', highlightNavbarItem);
});