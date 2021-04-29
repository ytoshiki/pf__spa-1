import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export const defaultLoading = () => {
  tl.to('.loading', {
    duration: 0.3,
    height: '100vh',
    top: 0
  })
    .to('.loading', {
      duration: 0.4,
      height: 0,
      bottom: '100%',

      delay: 0.1
    })
    .set('.loading', { top: '100%', bottom: 0 });
};
