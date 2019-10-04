import { Component } from '@angular/core';
import { IntroExplainComponent } from 'src/app/modals';
import { IntroChoiceBtnComponent } from 'src/app/modals/intro-choice-btn/intro-choice-btn.component';
import { StrategyProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public mode: boolean = false;
  public dark: boolean = false;
  public icons: { name: string; component: any; displayName: string }[] = [
    { name: 'home', component: false, displayName: "Page d'accueil" },
    {
      name: 'quizz',
      component: 'quizz',
      displayName: 'Testez vos connaissances',
    },
    {
      name: 'learn',
      component: 'learn',
      displayName: 'Quelques liens utiles …',
    },
    {
      name: 'user',
      component: IntroExplainComponent,
      displayName: 'Mon profil',
    },
    {
      name: 'settings',
      component: IntroChoiceBtnComponent,
      displayName: 'Mes paramètres',
    },

    { name: 'about', component: 'about', displayName: 'A propos' },
  ];

  constructor(private strategyProvider: StrategyProvider) {}

  /** Reset strategy */
  public resetStrategy(i): void {
    console.log(i);
    if (i === 0) {
      this.strategyProvider.resetStrategy();
    }
  }
}
