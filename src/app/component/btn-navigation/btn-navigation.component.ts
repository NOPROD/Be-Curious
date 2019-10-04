import { Component, Input, OnInit } from '@angular/core';
import { NavigationText } from 'src/app/shared/interface/nagivation/navigation.interface';
import { ColorFilter } from 'src/app/shared/interface/theme/color-filter.interface';
import { StrategyProvider, TutorialProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-btn-navigation',
  templateUrl: './btn-navigation.component.html',
  styleUrls: ['./btn-navigation.component.scss'],
})
export class BtnNavigationComponent implements OnInit {
  public colorFilter: ColorFilter;
  @Input() goTo: string;
  @Input() home: string;
  @Input() text: NavigationText;

  constructor(
    private strategyProvider: StrategyProvider,
    private tutorialProvider: TutorialProvider
  ) {}

  ngOnInit() {
    this.initFilter();
  }
  /** Set strategy */
  public setStrategy(strategy: string) {
    this.strategyProvider.setStrategy(strategy);
  }

  /** init Filter */
  private initFilter() {
    this.tutorialProvider
      .getColor()
      .subscribe(colorFilter => (this.colorFilter = colorFilter));
  }
}
