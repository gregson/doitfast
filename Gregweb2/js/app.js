document.addEventListener('DOMContentLoaded', function() {
  // Navigation latérale
  const sideNav = document.getElementById('sideNav');
  const openBtn = document.querySelector('.side-nav-btn-open');
  const closeBtn = document.querySelector('.side-nav-btn-close');
  const navLinks = document.querySelectorAll('#sideNav a');

  function openNav() {
    sideNav.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    sideNav.style.width = '0';
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);

  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Carrousel responsive
  function setEqualHeight() {
    let slides = document.querySelectorAll('.carousel-item');
    let maxHeight = Math.max(...Array.from(slides, slide => {
      slide.style.height = '';
      return slide.offsetHeight;
    }));
    slides.forEach(slide => slide.style.height = `${maxHeight}px`);
  }

  // Initialisation et gestion du redimensionnement
  setEqualHeight();
  window.addEventListener('resize', setEqualHeight);

  // Animations au défilement
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Animation initiale
});
