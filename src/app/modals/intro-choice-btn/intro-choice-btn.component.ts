import { Component } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';
import { IntroProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-modal-intro-choice-btn',
  templateUrl: './intro-choice-btn.component.html',
  styleUrls: ['./intro-choice-btn.component.scss'],
})
export class IntroChoiceBtnComponent {
  constructor(
    private drawer: NzDrawerRef<string>,
    private introProvider: IntroProvider
  ) {}

  // Never show pop up again
  public closeAndNeverIntro() {
    this.drawer.close();
    this.introProvider.hasSeen().subscribe();
  }
}
