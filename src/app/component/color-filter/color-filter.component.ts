import { Component, OnInit } from '@angular/core';
import { ColorFilter } from 'src/app/shared/interface/theme/color-filter.interface';
import { AnimeJsProvider, TutorialProvider } from 'src/app/shared/provider';
@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss'],
})
export class ColorFilterComponent implements OnInit {
  public colorFilter: ColorFilter;
  public switchValue: boolean = false;
  private filterConst: ColorFilter[] = [
    { filterState: 'blk-filter', pathState: 'path-blk', content: 'Mode nuit' },
    {
      filterState: 'wht-filter',
      pathState: 'path-white',
      content: 'Mode jour',
    },
  ];
  constructor(
    private animeProvider: AnimeJsProvider,
    private tutorialProvider: TutorialProvider
  ) {}

  ngOnInit() {
    this.initFilter();
  }

  /** Change filter */
  public changeFilter() {
    if (this.switchValue) {
      this.tutorialProvider.setColor(this.filterConst[0]);
    } else {
      this.tutorialProvider.setColor(this.filterConst[1]);
    }
    this.switchValue = !this.switchValue;
  }

  /** Init filter */
  private initFilter() {
    this.tutorialProvider
      .getColor()
      .subscribe(colorfilter => (this.colorFilter = colorfilter));
  }
}
