import { Component, OnInit } from '@angular/core';
import { TutorialProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  public tutorial;
  constructor(private tutorialProvider: TutorialProvider) {}

  ngOnInit() {
    this.initTutorial();
  }

  private initTutorial() {
    this.tutorialProvider
      .getTutorial()
      .subscribe(tutorialChoice => (this.tutorial = tutorialChoice));
    console.log(this.tutorial);
  }
}
