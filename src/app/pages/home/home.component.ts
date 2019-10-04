import { Component } from '@angular/core';
import { AnimeJsProvider, StrategyProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public strategy: 'choice' | 'theme' | 'article' = 'choice';

  constructor(
    private animeProvider: AnimeJsProvider,
    private strategyProvider: StrategyProvider
  ) {}

  ngAfterViewInit() {
    this.initStrategy();
    setTimeout(() => this.animeProvider.fadeInMain(), 0);
  }

  /** Init strategy */
  private initStrategy(): void {
    this.strategyProvider.initStrategy(this.strategy);
    this.strategyProvider
      .getStrategy()
      .subscribe(strategy => (this.strategy = strategy));
  }
}
