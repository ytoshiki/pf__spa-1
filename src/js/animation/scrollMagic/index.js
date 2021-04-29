import ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugins';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// const getDuration = (parent, element) => {
//   return document.querySelector(parent).clientHeight - document.querySelector(element).clientHeight;
// };

export const triggerScrollMagic = () => {
  const height = document.querySelector('.c-block-approach-img').clientHeight;

  const scroll = TweenMax.to('.animate-img', { scale: 1.1 });

  const controller = new ScrollMagic.Controller();

  const imageScroll = new ScrollMagic.Scene({ triggerElement: '.c-block-approach-img', triggerHook: 0, duration: height }).setTween(scroll).addTo(controller);
};
