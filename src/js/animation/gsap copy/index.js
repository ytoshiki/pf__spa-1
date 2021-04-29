import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export const topPageScroll = () => {
  gsap.to('.animate-img', {
    scrollTrigger: {
      trigger: '.c-block-approach-img',
      start: 'top center'
    },

    scale: 1.1,
    duration: 3
  });

  gsap.from('.c-box-approach-services__heading', {
    scrollTrigger: {
      trigger: '.c-box-approach-services__heading',
      start: 'top center'
    },

    y: 20,
    opacity: 0,
    delay: 0.4,

    duration: 1
  });

  gsap.from('.c-box-approach-services__list', {
    scrollTrigger: {
      trigger: '.c-box-approach-services__list',
      start: 'top center'
    },

    y: 20,
    opacity: 0,
    delay: 0.4,

    duration: 1
  });
};
