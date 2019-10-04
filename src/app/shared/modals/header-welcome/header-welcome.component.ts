import { Component, Input } from '@angular/core';
import { AnimeJsProvider } from '../../provider';

@Component({
  selector: 'app-modal-header-welcome',
  templateUrl: './header-welcome.component.html',
  styleUrls: ['./header-welcome.component.scss'],
})
export class HeaderWelcomeComponent {
  @Input() titleLeft: string;
  @Input() titleRight: string;
  @Input() class: string[];
  @Input() strategy: 'pop-up' | 'intro-step';
  constructor(private animeProvider: AnimeJsProvider) {}

  ngAfterViewInit() {
    // Force changeDetection with fake timeOut
    setTimeout(() => {
      switch (this.strategy) {
        case 'pop-up': {
          this.animeProvider.modalHeader();
        }
        case 'intro-step': {
          this.animeProvider.introHeader();
        }
        default: {
          break;
        }
      }
    }, 0);
  }
}
