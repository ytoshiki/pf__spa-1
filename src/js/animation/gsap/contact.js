import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export const contactPageReveal = () => {
  const tl = gsap.timeline();

  tl.from('.c-block-contact-title__title', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.3
  })
    .from('.c-block-contact__address', {
      y: 20,
      opacity: 0,
      duration: 0.4
    })
    .from('.c-form', {
      y: 20,
      opacity: 0,
      duration: 0.4
    });

  gsap.from('.c-block-contact-title__img', {
    opacity: 0,
    duration: 2,
    delay: 2
  });
};
