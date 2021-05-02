import barba from '@barba/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { contactPageReveal } from '../gsap/contact';
gsap.registerPlugin(ScrollTrigger);
import { topPageScroll } from '../gsap/index';
import { defaultLoading } from '../gsap/loading';
import { studioPageScroll } from '../gsap/studio';
import { worksPageScroll, worksReveal } from '../gsap/works';

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

  console.log('killed');
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
        if (data.next.url.path == paths.top) {
          gsap.from('.c-block-approach-title', {
            y: 20,
            opacity: 0,
            duration: 2,
            delay: 0.75
          });

          topPageScroll();
        } else if (data.next.url.path == paths.studio) {
          studioPageScroll();
        } else if (data.next.url.path == paths.contact) {
          contactPageReveal();
        } else if (data.next.url.path == paths.work) {
          worksReveal();
          worksPageScroll();
        }
      },
      once(data) {
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
            duration: 2,
            delay: 0.75
          });

          // Scroll Trigger
          topPageScroll();
        }
      }
    }
  ]
});
