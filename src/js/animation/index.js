import barba from '@barba/core';
import { delay, pageTansition, contentAnimation, headingRevial, businessTransition, opacityOff } from './function';
import Rellax from 'rellax';
import './scrollReveal';
import { triggerScrollMagic, triggerScrollMagicWipe } from './scrollMagic';

// leave is executed when leaving
// Enter is executed when entering

barba.init({
  // to is used to specify which to which
  sync: true,
  transitions: [
    {
      name: 'fade',
      to: {
        namespace: ['about']
      },
      async leave(data) {
        const done = this.async();

        pageTansition();
        await delay(1000);
        done();
      },
      async enter(data) {
        headingRevial();
      },

      async once(data) {
        headingRevial();
      }
    },
    {
      name: 'fade',
      to: {
        namespace: ['home']
      },
      leave(data) {},
      enter(data) {
        headingRevial();
      },

      once(data) {
        headingRevial();
      }
    },
    {
      name: 'fade',
      to: {
        namespace: ['business']
      },

      leave(data) {
        const done = this.async();
        opacityOff(data.current.container, done);
      },

      enter(data) {
        businessTransition(data.next.container);
      },

      once(data) {
        businessTransition(data.next.container);
      }
    },
    {
      name: 'about-parallex',
      to: {
        namespace: ['about']
      },
      enter() {
        // create your self transition here
        var rellax = new Rellax('.rellax', {
          vertical: true
        });
      },

      once() {
        var rellax = new Rellax('.rellax', {
          vertical: true
        });
      }
    },
    {
      name: 'scrollMagic',
      to: {
        namespace: ['scrollMagic']
      },
      enter() {
        triggerScrollMagic();
      },
      once() {
        triggerScrollMagic();
      }
    }
  ]
});
