import barba from '@barba/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
import { topPageScroll } from '../gsap/index';
import { defaultLoading } from '../gsap/loading';
import { studioPageScroll } from '../gsap/studio';

// leave is executed when leaving
// Enter is executed when entering

const paths = {
  top: '/index.html',
  work: '/pages/works.html',
  studio: '/pages/studio.html'
};

barba.init({
  // to is used to specify which to which
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        defaultLoading();

        done();
      },
      async enter(data) {
        if (data.next.url.path == paths.top) {
          // Scroll Trigger
          topPageScroll();
        }

        gsap.from('.c-block-approach-title', {
          y: 20,
          opacity: 0,
          duration: 2,
          delay: 0.75
        });
      },
      once(data) {
        if (data.next.url.path == paths.top) {
          defaultLoading();

          gsap.from('.c-block-approach-title', {
            y: 20,
            opacity: 0,
            duration: 2,
            delay: 0.75
          });

          // Scroll Trigger
          topPageScroll();
        } else if (data.next.url.path == paths.studio) {
          defaultLoading();

          studioPageScroll();
        }
      }
    }
  ]
});
