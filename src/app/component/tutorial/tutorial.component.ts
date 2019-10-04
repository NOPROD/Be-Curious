import { Component, OnInit } from '@angular/core';
import { ColorFilter } from 'src/app/shared/interface/theme/color-filter.interface';
import { Tuto } from 'src/app/shared/interface/tuto/tutorial.interface';
import { TutorialProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  public colorFilter: ColorFilter;
  public tutorial: Tuto;
  constructor(private tutorialProvider: TutorialProvider) {}

  ngOnInit() {
    document.body.classList.add('body-h-auto');
    this.initTutorial();
    this.initFilter();
  }

  /** Get tutorial */
  private initTutorial() {
    this.tutorialProvider
      .getTutorial()
      .subscribe(tutorial => (this.tutorial = tutorial));
  }

  /** init Filter */
  private initFilter() {
    this.tutorialProvider
      .getColor()
      .subscribe(colorFilter => (this.colorFilter = colorFilter));
  }

  ngOnDestroy() {
    document.body.classList.remove('body-h-auto');
  }
}
