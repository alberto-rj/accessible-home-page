const navbar = document.querySelector('.nav');
const menuOverlay = document.querySelector('.menu-overlay');
const menuCaller = document.querySelector('.menu-caller');
const closeButton = document.querySelector('.close-menu');
const humburgerButton = document.querySelector('.hamburger-menu');

const openNavbar = () => {
  navbar.classList.replace('hidden', 'open');
  navbar.classList.replace('close', 'open');
  humburgerButton.setAttribute('aria-expanded', 'true');
  closeButton.setAttribute('aria-expanded', 'true');
  menuOverlay.classList.add('active');
  menuCaller.classList.add('hidden');
};

const closeNavbar = () => {
  navbar.classList.replace('open', 'close');
  humburgerButton.setAttribute('aria-expanded', 'false');
  closeButton.setAttribute('aria-expanded', 'false');
  menuOverlay.classList.remove('active');
  menuCaller.classList.remove('hidden');
};

const handleNavbar = () => {
  if (navbar.classList.contains('close')) {
    navbar.classList.replace('close', 'hidden');
  }
};

humburgerButton.addEventListener('click', openNavbar);
closeButton.addEventListener('click', closeNavbar);
navbar.addEventListener('animationend', handleNavbar);

// Touch Swap
TouchSwapEvent.listenToLeft(menuCaller, openNavbar);
TouchSwapEvent.listenToRight(navbar, closeNavbar);