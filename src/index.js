const setActiveLink = () => {
  const path = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => link.classList.remove('active'));

  links.forEach((link) => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
};

document.addEventListener('DOMContentLoaded', setActiveLink);
