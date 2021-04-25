import gsap from 'gsap';

export const delay = (n = 2000) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

export const pageTansition = () => {
  const tl = gsap.timeline();

  tl.to('.loading-screen', {
    duration: 0.9,
    bottom: '0%',
    height: '100%',
    ease: 'Expo.easeInOut'
  });

  tl.to('.loading-screen', {
    duration: 0.7,
    height: '100%',
    bottom: '100%',
    ease: 'Expo.easeInOut',
    delay: 0.2
  });

  tl.set('.loading-screen', { bottom: '-100%' });
};

export const contentAnimation = () => {
  const tl = gsap.timeline();
  tl.from('.animate-text', {
    duration: 0.5,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.3
  });
};

export const headingRevial = () => {
  const tl = gsap.timeline();
  tl.from('.top-cover', {
    duration: 0.8,
    y: -100,
    opacity: 1,
    ease: 'Expo.easeIn',
    delay: 1
  });

  tl.from('.c-work-top__img', {
    duration: 0.6,
    scale: 1.3
  });

  tl.from('.animate-text', {
    duration: 0.5,
    y: 10,
    opacity: 0
  });
};

export const businessTransition = (container) => {
  const tl = gsap.timeline();
  tl.from(container, {
    opacity: 0,
    duration: 0.8,
    translateY: 30,
    ease: 'Expo.ease',
    delay: 0.5
  });
};

export const opacityOff = (container, done) => {
  const tl = gsap.timeline();
  tl.to(container, {
    opacity: 0,
    duration: 1,
    ease: 'none',
    delay: 0,
    onComplete: () => done()
  });
};
