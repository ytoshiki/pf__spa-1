import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.reveal-text-left', {
  origin: 'left',
  duration: 1000,
  distance: '-20px',
  reset: true,
  easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-text-right', {
  origin: 'right',
  duration: 1000,
  distance: '-20px',
  reset: true,
  easing: 'ease-out'
});
