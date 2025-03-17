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

  // Gestion améliorée des ancres
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        closeNav();
        setTimeout(() => {
          const headerOffset = 60;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
