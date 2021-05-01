import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export const worksReveal = () => {
  const tl = gsap.timeline();

  tl.from('.c-block-works-top__title', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.75
  }).from('.c-block-works-top__image', {
    opacity: 0,
    x: 20,
    duration: 1
  });
};

export const worksPageScroll = () => {
  // Animation for accent text

  gsap.fromTo(
    CSSRulePlugin.getRule('.c-box-works-accent__fade:before'),
    {
      left: 0
    },
    {
      left: '100%',
      duration: 1,
      ease: 'Expo.easeInOut',
      scrollTrigger: {
        trigger: '.c-box-works-accent',
        start: 'top center'
      }
    }
  );

  gsap.from('.c-box-works-accent__text', {
    y: 30,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: '.c-box-works-accent',
      start: 'top center'
    }
  });
};
