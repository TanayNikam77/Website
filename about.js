// Add active class to current navigation link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
