import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export const studioPageScroll = () => {
  const scrollEndHeightValue = document.querySelector('.c-box-studio-values__list').clientHeight;
  const scrollEndHeightStaff = document.querySelector('.c-box-studio-staff__list').clientHeight;

  gsap.from('.c-block-approach-title', {
    y: 10,
    opacity: 0,
    duration: 0.4,
    delay: 0.75
  });

  // Animation for Values

  if (document.body.clientWidth > 750) {
    gsap.to('.c-box-studio-values__heading', {
      duration: 1,
      scrollTrigger: {
        trigger: '.c-box-studio-values__inner',
        start: 'top 10%',
        pin: '.c-box-studio-values__heading',
        end: `top -${scrollEndHeightValue - 200}px`
      }
    });
  }

  gsap.from('.c-box-studio-values__text', {
    opacity: 0,
    duration: 1,
    stagger: 0.6,
    y: 20,
    scrollTrigger: {
      trigger: 'c-box-studio-values__list',
      start: 'top top'
    }
  });

  gsap.to('.c-block-studio-images__img', {
    scale: 1.1,
    duration: 2,
    delay: 0.2,
    scrollTrigger: {
      trigger: 'c-box-studio-values__images',
      start: 'top top'
    }
  });

  // Animation for accent text

  gsap.fromTo(
    CSSRulePlugin.getRule('.c-box-studio-accent__fade:before'),
    {
      left: 0
    },
    {
      left: '100%',
      duration: 1,
      ease: 'Expo.easeInOut',
      scrollTrigger: {
        trigger: '.c-box-studio-accent',
        start: 'top center'
      }
    }
  );

  gsap.fromTo(
    CSSRulePlugin.getRule('.c-box-studio-accent-sec__fade:before'),
    {
      left: 0
    },
    {
      left: '100%',
      duration: 1,
      ease: 'Expo.easeInOut',
      scrollTrigger: {
        trigger: '.c-box-studio-accent-sec',
        start: 'top center'
      }
    }
  );

  gsap.from('.c-box-studio-accent__text', {
    y: 30,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: '.c-box-studio-accent',
      start: 'top center'
    }
  });

  gsap.from('.c-box-studio-accent-sec__text', {
    y: 30,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: '.c-box-studio-accent-sec',
      start: 'top center'
    }
  });

  // Animation for staff

  if (document.body.clientWidth > 750) {
    gsap.to('.c-box-studio-staff__heading', {
      scrollTrigger: {
        trigger: '.c-box-studio-staff__inner',
        start: 'top 10%',
        pin: '.c-box-studio-staff__heading',
        end: `top -${scrollEndHeightStaff - 210}px`
      }
    });
  }

  // gsap.from('.c-box-studio-job__item', {
  //   opacity: 0,
  //   duration: 1,
  //   stagger: 0.6,
  //   y: 20,
  //   scrollTrigger: {
  //     trigger: '.c-box-studio-job__list',
  //     start: 'top top'
  //   }
  // });
};
