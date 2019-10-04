import { Injectable } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { AnimationBasic } from '../../interface/theme/animation.interface';

@Injectable({ providedIn: 'root' })
export class AnimeJsProvider {
  constructor() {}

  /** Create basic Fade From animation */
  public fade(params: AnimationBasic) {
    anime.timeline({ loop: params.repeat }).add({
      targets: params.targ,
      opacity: params.opacityInterval,
      easing: params.easingMode,
      duration: params.animationDuration,
      delay: params.startDelay,
      translateX: params.translateX,
    });
  }

  public fadeInMain() {
    anime.timeline({ loop: false }).add({
      duration: 1000,
      easing: 'easeOutExpo',
      targets: '.main-content',
      opacity: [0, 1],
      delay: 0,
    });
  }

  /** Create Fade From To animation */
  public fadeInOut(params: AnimationBasic[]) {
    anime
      .timeline({ loop: params[0].repeat })
      .add({
        targets: params[0].targ,
        opacity: params[0].opacityInterval,
        easing: params[0].easingMode,
        duration: params[0].animationDuration,
        delay: params[0].startDelay,
      })
      .add({
        targets: params[1].targ,
        opacity: params[1].opacityInterval,
        easing: params[1].easingMode,
        duration: params[1].animationDuration,
        delay: params[1].startDelay,
      });
  }

  /** Anime element box shadow */
  public boxShadow(className: any, colorFrom: string, colorTo: any) {
    anime.timeline({ loop: false }).add({
      targets: '.' + className,
      boxShadow: [colorFrom, colorTo],
      easing: 'linear',
      duration: '100',
    });
  }

  public animeBackground() {
    anime.timeline({ loop: false }).add({
      repeat: false,
      animationDuration: 1000,
      easingMode: 'easeOutExpo',
      targ: '.main-back',
      opacityInterval: [1, 0],
      startDelay: 0,
    });
  }

  /** Morphing in */
  public morphingIn(target: string, delay?: number) {
    anime({
      targets: '.polymorph',
      points: [
        { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
        { value: '215, 110 0, 110 0, 0 0, 0 67, 76' },
      ],
      easing: 'easeOutQuad',
      duration: 1200,
      loop: false,
      delay: delay,
    });

    anime({
      targets: target,
      opacity: 1,
      duration: 500,
      translateY: 150,
      delay: delay,
    });
  }

  /** Morphing out */

  public morphingOut(target: string) {
    anime({
      targets: '.polymorph',
      points: [
        { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
        { value: '215,110 0,110 0,0 49.3,0 215,0' },
      ],
      easing: 'easeOutQuad',
      duration: 1200,
      loop: false,
    });

    anime({
      targets: target,
      opacity: 0,
      duration: 500,
      translateY: -800,
      loop: false,
    });
  }

  /** Init Home Title Header */
  public homeHeader() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutElastic(1, .5)',
        duration: 1000,
        delay: function(el, i) {
          return 70 * (i + 1) * 5;
        },
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutElastic(1, .5)',
        duration: 1000,
        offset: '-=875',
        delay: function(el, i, l) {
          return 80 * (l - i) * 5;
        },
      });
  }

  /** Init Welcome Modal header */
  public modalHeader() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml8',
        opacity: 1,
        duration: 100,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeOutExpo',
        offset: '-=600',
      })
      .add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550',
      })
      .add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000',
      });
  }

  /** Init intro header */
  public introHeader() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml8',
        opacity: 1,
        duration: 100,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: 'easeOutExpo',
        offset: '-=600',
      })
      .add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550',
      })
      .add({
        targets: '.ml8 .bang',
        scale: [0, 0.7],
        duration: 1200,
        offset: '-=1000',
      });
  }

  /** Init second header */
  public secondHeader() {
    setTimeout(
      () =>
        anime.timeline({ loop: false }).add({
          targets: '.ml12 .letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: function(el, i) {
            return 500 + 30 * i;
          },
        }),
      500
    );
  }
}
