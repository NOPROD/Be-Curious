import { Injectable } from '@angular/core';

@Injectable()
export class LottieProvider {
  public anim: any;
  public animationSpeed: number = 1;

  /** Get context */
  public handleAnimation(anim: any) {
    this.anim = anim;
  }

  /**  Stop anim */
  public stop() {
    this.anim.stop();
  }

  /**  Play anim */
  public play() {
    this.anim.play();
  }

  /**  Pause anim */
  public pause() {
    this.anim.pause();
  }

  /**  Set speed */
  public setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
