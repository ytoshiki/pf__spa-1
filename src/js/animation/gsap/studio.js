import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export const studioPageScroll = () => {
  const scrollEndHeight = document.querySelector('.c-box-studio-values__list').clientHeight;

  console.log(window.innerHeight / 10);
  gsap.to('.c-box-studio-values__heading', {
    scrollTrigger: {
      trigger: '.c-box-studio-values__inner',
      start: 'top 10%',
      pin: '.c-box-studio-values__heading',
      end: `top -${scrollEndHeight - 160}px`,
      markers: true
    }
  });

  gsap.from('.c-box-studio-values__text', {
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    y: 30,
    scrollTrigger: {
      trigger: 'c-box-studio-values__list',
      start: 'top top',

      markers: true
    }
  });

  gsap.to('.c-block-studio-images__img', {
    scale: 1.1,
    duration: 2,
    delay: 0.2,
    scrollTrigger: {
      trigger: 'c-box-studio-values__images',
      start: 'top top',
      markers: true
    }
  });
};
