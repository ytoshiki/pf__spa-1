import barba from '@barba/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import EventListener from '../../script';
import { contactPageReveal } from '../gsap/contact';
gsap.registerPlugin(ScrollTrigger);
import { topPageScroll } from '../gsap/index';
import { defaultLoading } from '../gsap/loading';
import { studioPageScroll } from '../gsap/studio';
import { worksPageScroll, worksReveal } from '../gsap/works';
import { initRellax } from '../parallex';

// leave is executed when leaving
// Enter is executed when entering

const paths = {
  top: '/index.html',
  topOne: '/',
  work: '/works.html',
  studio: '/studio.html',
  contact: '/contact.html'
};

const killOldTriggers = () => {
  let triggers = ScrollTrigger.getAll();
  triggers.forEach((trigger) => {
    trigger.kill();
  });
};

barba.hooks.beforeEnter(({ current, next }) => {
  var beforeEnterPromiseAll = new Promise(function (resolve) {
    killOldTriggers();

    resolve();
  });

  return beforeEnterPromiseAll;
});

barba.hooks.enter(({ current, next }) => {
  var enterPromiseAll = new Promise(function (resolve) {
    current.container.remove();
    resolve();
  });

  new EventListener();
  initRellax();
  window.scrollTo(0, 0);

  return enterPromiseAll;
});

barba.init({
  // to is used to specify which to which

  sync: true,
  transitions: [
    {
      name: 'default transition',
      async leave(data) {
        const done = this.async();
        defaultLoading();
        done();
      },
      async enter(data) {
        if (data.next.url.path == paths.studio) {
          studioPageScroll();
        } else if (data.next.url.path == paths.contact) {
          contactPageReveal();
        } else if (data.next.url.path == paths.work) {
          worksReveal();
          worksPageScroll();
        } else {
          gsap.from('.c-block-approach-title', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.75
          });

          topPageScroll();
        }
      },
      once(data) {
        new EventListener();
        initRellax();

        if (data.next.url.path == paths.studio) {
          defaultLoading();
          studioPageScroll();
        } else if (data.next.url.path == paths.work) {
          defaultLoading();
          worksReveal();
          worksPageScroll();
        } else if (data.next.url.path == paths.contact) {
          defaultLoading();
          contactPageReveal();
        } else {
          defaultLoading();

          gsap.from('.c-block-approach-title', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.75
          });

          // Scroll Trigger
          topPageScroll();
        }
      }
    }
  ]
});
