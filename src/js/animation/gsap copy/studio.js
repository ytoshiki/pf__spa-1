import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export const studioPageScroll = () => {
  gsap.to('.c-box-studio-values__heading', {
    scrollTrigger: {
      trigger: '.c-box-studio-values__heading',
      start: 'top 10%',
      pin: true,
      end: 'top 30%',
      markers: true
    }
  });
};
