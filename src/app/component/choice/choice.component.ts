import { Component, Input } from '@angular/core';
import { Tuto } from 'src/app/shared/interface/tuto/tutorial.interface';
import { StrategyProvider, TutorialProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent {
  @Input() tutorial: Tuto[];

  public icons: {
    name: string;
    displayName: string;
    enable: boolean;
    tutoTitle: string;
  }[] = [
    {
      name: 'rxjs',
      displayName: 'En apprendre plus sur RxJS',
      enable: true,
      tutoTitle: 'RxJs',
    },
    {
      name: 'angular',
      displayName: 'En apprendre plus sur Angular',
      enable: false,
      tutoTitle: 'Angular',
    },
    {
      name: 'typescript',
      displayName: 'En apprendre plus sur Typescript',
      enable: false,
      tutoTitle: 'Typescript',
    },

    {
      name: 'CSS',
      displayName: 'En apprendre plus sur le CSS',
      enable: false,
      tutoTitle: 'CSS',
    },
    {
      name: 'git',
      displayName: 'En apprendre plus sur Git',
      enable: false,
      tutoTitle: 'Git',
    },

    {
      name: 'ionic',
      displayName: 'En apprendre plus sur Ionic',
      enable: false,
      tutoTitle: 'Ionic',
    },
    {
      name: 'Java',
      displayName: 'En apprendre plus sur Java',
      enable: false,
      tutoTitle: 'Java',
    },
  ];

  constructor(
    private strategyProvider: StrategyProvider,
    private tutorialProvider: TutorialProvider
  ) {}

  /** Set strategy */
  public setStrategy(strategy: string, tutorial: string, enable: boolean) {
    if (enable) {
      this.strategyProvider.setStrategy(strategy);
      this.tutorialProvider.setTutorial(tutorial);
    }
  }
}
