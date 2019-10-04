import { Component } from '@angular/core';
import { AnimeJsProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public title: string = 'À propos';

  constructor(private animeProvider: AnimeJsProvider) {}

  ngAfterViewInit() {
    setTimeout(() => this.animeProvider.fadeInMain(), 0);
  }
}
