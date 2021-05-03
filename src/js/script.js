import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(CSSRulePlugin);

class EventListener {
  constructor() {
    this.init();
    this.targets = {
      webMob: {
        name: 'web&amp;mobile development',
        text: 'From your initial concept to your final product, we will guide you through the process of building a quality application aligned with your business objectives.',
        img: 'img-works-01.jpg',
        index: 0
      },
      front: {
        name: 'front-end development',
        text: 'We offer professional conversion of your designs created in Sketch, Figma or Adobe XD to modern, maintainable and fast front-end.',
        img: 'frontend.jpg',
        index: 1
      },
      back: {
        name: 'back-end development',
        text: 'We build fast, scalable and secure Ruby on Rails or PHP back-end applications with integrated external APIs or custom one built according to your requirements.',
        img: 'backend.jpg',
        index: 2
      },
      ui: {
        name: 'ux/ui design',
        text: 'Let us translate your concept into a great user experience and highly usable user interface, whether it’s a web, mobile application or a corporate website.',
        img: 'ui.jpg',
        index: 3
      }
    };
  }

  init() {
    this.toggleList = document.querySelectorAll('.c-box-approach-services__item');
    this.image = document.querySelector('.c-box-approach-services__jpg');
    this.title = document.querySelector('.c-box-approach-services__title');
    this.body = document.querySelector('.c-box-approach-services__text');

    if (!this.toggleList.length || !this.image || !this.title || !this.body) return;

    this.listen();
  }

  listen() {
    this.toggleList.forEach((list) => {
      list.querySelector('span').addEventListener(
        'click',
        (e) => {
          this.text = e.target.innerHTML.toLowerCase().trim();
          this.callback();
        },
        false
      );
    });
  }

  callback() {
    if (this.text == this.targets.front.name) {
      this.animateImage();
      setTimeout(() => {
        this.changeContent(this.targets.front);
        this.toggleClass(this.targets.front.index);
        return;
      }, 1000);
    } else if (this.text === this.targets.back.name) {
      this.animateImage();

      setTimeout(() => {
        this.changeContent(this.targets.back);
        this.toggleClass(this.targets.back.index);
        return;
      }, 1000);
    } else if (this.text === this.targets.webMob.name) {
      this.animateImage();
      setTimeout(() => {
        this.changeContent(this.targets.webMob);
        this.toggleClass(this.targets.webMob.index);
        return;
      }, 1000);
    } else if (this.text === this.targets.ui.name) {
      this.animateImage();
      setTimeout(() => {
        this.changeContent(this.targets.ui);
        this.toggleClass(this.targets.ui.index);

        return;
      }, 1000);
    }

    console.log('No Match');
    return;
  }

  changeContent(target) {
    this.image.src = `./dist/assets/images/${target.img}`;

    this.title.innerHTML = target.name;
    this.body.innerHTML = target.text;
    this.toggleClass(target.index);
  }

  toggleClass(index) {
    this.toggleList.forEach((list) => {
      if (list.className.includes('is-active')) {
        list.classList.remove('is-active');
      }
    });

    this.toggleList[index].classList.add('is-active');
  }

  animateImage() {
    const tl = gsap.timeline();
    tl.to(CSSRulePlugin.getRule('.c-box-approach-services__img:before'), {
      width: '100%',
      duration: 1,
      ease: 'Expo.easeInOut'
    }).to(CSSRulePlugin.getRule('.c-box-approach-services__img:before'), {
      left: '100%',
      duration: 1,
      ease: 'Expo.easeInOut'
    });

    gsap.fromTo(
      '.c-box-approach-services__description',
      {
        opacity: 0,
        x: 60
      },
      {
        opacity: 1,
        duration: 0.8,
        delay: 1.5,
        x: 0
      }
    );

    gsap.set(CSSRulePlugin.getRule('.c-box-approach-services__img:before'), {
      width: 0,
      left: 0
    });
  }
}

export default EventListener;
