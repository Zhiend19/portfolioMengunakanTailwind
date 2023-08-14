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
  