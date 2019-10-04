export interface AnimationBasic {
  repeat: boolean;
  targ: string;
  opacityInterval: number | number[];
  easingMode: string;
  animationDuration: number;
  startDelay?: number | Function;
  translateX?: number;
}
