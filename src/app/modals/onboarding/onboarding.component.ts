import { Component } from '@angular/core';
import { AnimeJsProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  public opacity: number = 0;
  public step: number = 0;

  constructor(private animeProvider: AnimeJsProvider) {}
  // Force changeDetection with fake timeOut

  /** Display carousel with animation */
  public initCarousel() {
    // Force resize : Bug from Ng-Zorro
    this.animeProvider.fade({
      repeat: false,
      animationDuration: 1000,
      easingMode: 'easeOutExpo',
      targ: '.modal-content',
      opacityInterval: [0, 1],
      startDelay: 1400,
    });
  }
}
