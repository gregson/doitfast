document.addEventListener('DOMContentLoaded', function() {
  // Gestion du menu latéral
  const sideNav = document.getElementById('sideNav');
  const openBtn = document.querySelector('.side-nav-btn-open');
  const closeBtn = document.querySelector('.side-nav-btn-close');
  const menuLinks = document.querySelectorAll('.modal-content-nav ul li a');

  // Fonction pour ouvrir le menu
  const openNav = () => {
    sideNav.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  // Fonction pour fermer le menu
  const closeNav = () => {
    sideNav.classList.remove('show');
    document.body.style.overflow = '';
  };

  // Gestionnaires d'événements
  if (openBtn) openBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Fermer le menu lors du clic sur un lien
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });
  });

  // Carrousel responsive amélioré
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const adjustSlideHeight = (activeSlide) => {
      const height = activeSlide.offsetHeight;
      const carouselInner = carousel.querySelector('.carousel-inner');
      carouselInner.style.height = `${height}px`;
    };

    // Observer les changements de slide
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const activeSlide = carousel.querySelector('.carousel-item.active');
          if (activeSlide) {
            adjustSlideHeight(activeSlide);
          }
        }
      });
    });

    // Observer chaque slide
    const slides = carousel.querySelectorAll('.carousel-item');
    slides.forEach(slide => {
      observer.observe(slide, {
        attributes: true,
        attributeFilter: ['class']
      });
    });

    // Ajuster la hauteur initiale
    const activeSlide = carousel.querySelector('.carousel-item.active');
    if (activeSlide) {
      adjustSlideHeight(activeSlide);
    }

    // Gérer le redimensionnement
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        if (activeSlide) {
          adjustSlideHeight(activeSlide);
        }
      }, 250);
    });

    // Gérer les transitions
    carousel.addEventListener('slide.bs.carousel', (event) => {
      const nextSlide = event.relatedTarget;
      adjustSlideHeight(nextSlide);
    });
  }

  // Animations au défilement
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(animateOnScroll);
  });
  
  animateOnScroll();
});
