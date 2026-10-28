/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((n) => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
function blurHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
}
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== CONTACT FORM HANDLER ===============*/
const contactForm = document.getElementById('contact-form');
const contactAlert = document.getElementById('contact-alert');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value || 'Portfolio Contact from ' + name;
    const message = document.getElementById('contact-message').value;

    // Compose mailto link
    const mailtoLink = `mailto:alluprasad463@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Show feedback
    if (contactAlert) {
      contactAlert.textContent = 'Opening your email client to send your message...';
      contactAlert.classList.add('success');
      setTimeout(() => {
        contactAlert.textContent = '';
        contactAlert.classList.remove('success');
      }, 5000);
    }

    // Trigger email client
    window.location.href = mailtoLink;
    contactForm.reset();
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false,
  });

  sr.reveal('.home__data, .about__data');
  sr.reveal('.home__image', { delay: 400, origin: 'bottom' });
  sr.reveal('.home__social', { delay: 600, origin: 'bottom' });
  sr.reveal('.about__box', { interval: 150 });
  sr.reveal('.skills__content', { interval: 200 });
  sr.reveal('.services__card', { interval: 200 });
  sr.reveal('.projects__card', { interval: 200 });
  sr.reveal('.journey__box', { interval: 200 });
  sr.reveal('.contact__card', { interval: 150 });
  sr.reveal('.contact__form', { delay: 300 });
}
