import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const topPageScroll = () => {
  const tl = gsap.timeline();
  // console.log('top called');
  gsap.to('.animate-img', {
    scrollTrigger: {
      trigger: '.c-block-approach-img',
      start: 'top center'
    },

    scale: 1.1,
    duration: 3
  });

  gsap.to('.c-box-banner__span', {
    scrollTrigger: {
      trigger: '.c-box-banner',
      start: 'top bottom'
    },
    translateX: 0,
    duration: 2
  });

  // gsap.from('.c-box-approach-services__heading', {
  //   scrollTrigger: {
  //     trigger: '.c-box-approach-services__heading',
  //     start: 'top center'
  //   },

  //   y: 20,
  //   opacity: 0,
  //   delay: 0.4,

  //   duration: 1
  // });

  // gsap.from('.c-box-approach-services__list', {
  //   scrollTrigger: {
  //     trigger: '.c-box-approach-services__list',
  //     start: 'top center'
  //   },

  //   y: 20,
  //   opacity: 0,
  //   delay: 0.4,

  //   duration: 1
  // });

  gsap.from('.c-box-approach-services__img', {
    scrollTrigger: {
      trigger: '.c-box-approach-services',
      start: 'top center'
    },
    opacity: 0,
    duration: 0.7
  });

  gsap.from('.c-box-approach-services__description', {
    scrollTrigger: {
      trigger: '.c-box-approach-services',
      start: 'top 30%'
    },
    opacity: 0,
    x: 80,
    duration: 0.5
  });
};
