const triggerSideNav = document.querySelector('.side-nav-btn-open');
const closeSideNav = document.querySelector('.side-nav-btn-close');
const modal = document.getElementById('sideNav');
const body = document.querySelector('body');
const liElements = document.querySelectorAll('.container-nav li');

triggerSideNav.addEventListener('click', event => {
    modal.classList.add('show');
    body.style.overflow = 'hidden'; // Ajoute overflow: hidden au body
});

closeSideNav.addEventListener('click', event => {
    modal.classList.remove('show');
    body.style.overflow = ''; // Réinitialise overflow du body
});

liElements.forEach(li => {
    li.addEventListener('click', event => {
        modal.classList.remove('show');
        body.style.overflow = ''; // Réinitialise overflow du body    
    });
});


function setEqualHeight() {
    let slides = document.querySelectorAll('.carousel-item');
    let maxHeight = Math.max(...Array.from(slides, slide => {
        slide.style.height = '';
        return slide.offsetHeight;
    }));
    slides.forEach(slide => slide.style.height = `${maxHeight}px`);
}


// Run the initialization
//setEqualHeight();

// Delay initial call and add it to the end of the event queue
//window.addEventListener('resize', setEqualHeight);

