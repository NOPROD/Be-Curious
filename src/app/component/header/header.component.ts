import { Component, OnInit } from '@angular/core';
import { AnimeJsProvider } from 'src/app/shared/provider/animation/animeJs.provider';
import { LottieProvider } from 'src/app/shared/provider/animation/lottie.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public lottieConfig: object;
  public headerTitle: string[] = [];

  private title: string = 'Be-curious';

  constructor(
    private lottieProvider: LottieProvider,
    private animeProvider: AnimeJsProvider
  ) {
    this.lottieConfig = {
      path: 'assets/animations/json/dev-blue.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true,
    };
  }

  ngOnInit() {
    this.stringToLetters();
  }

  ngAfterViewInit() {
    this.animeProvider.homeHeader();
  }

  /** Pass lottie animation context */
  public handleAnimation(anim: any) {
    this.lottieProvider.handleAnimation(anim);
  }

  /** Convert string to array to generate span on every letters */
  private stringToLetters() {
    for (let i = 0; i < this.title.length; i++) {
      this.headerTitle.push(this.title[i]);
    }
  }
}
