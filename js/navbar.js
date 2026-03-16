const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});