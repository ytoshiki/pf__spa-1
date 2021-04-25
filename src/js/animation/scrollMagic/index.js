import ScrollMagic from 'scrollmagic';
import gsap, { TweenMax, TimelineMax } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugins';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const getDuration = (parent, element) => {
  return document.querySelector(parent).clientHeight - document.querySelector(element).clientHeight;
};

export const triggerScrollMagic = () => {
  // const scroll = new TweenMax().to('.c-scrollMagic-top__bar', { padding: '30px' });
  const controller = new ScrollMagic.Controller();

  const sticky = new ScrollMagic.Scene({ triggerElement: '.c-scrollMagic-top', triggerHook: 0, duration: getDuration('.c-scrollMagic-top', '.c-scrollMagic-top__bar') }).setPin('.c-scrollMagic-top__bar', { pushFollowers: false }).addTo(controller);

  const sections = document.querySelectorAll('.c-magic');

  sections.forEach((section) => {
    console.log(section);
    new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 'onLeave',
      duration: '200%'
    })
      .setPin(section, { pushFollowers: false })
      .addTo(controller);
  });
};
