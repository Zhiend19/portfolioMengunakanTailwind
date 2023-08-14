// humberger active
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-vixed')
    } else {
        header.classList.remove('navbar-vixed')
    }
}

// animasi landing page
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
  
    const animateSections = () => {
      sections.forEach(section => {
        if (isElementInViewport(section)) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    animateSections();
    window.addEventListener('scroll', animateSections);
  });