import barba from '@barba/core';

// leave is executed when leaving
// Enter is executed when entering

barba.init({
  // to is used to specify which to which
  sync: true,
  transitions: [
    // {
    //   name: 'scrollMagic',
    //   to: {
    //     namespace: ['scrollMagic']
    //   },
    //   enter() {
    //     triggerScrollMagic();
    //   },
    //   once() {
    //     triggerScrollMagic();
    //   }
    // }
  ]
});
