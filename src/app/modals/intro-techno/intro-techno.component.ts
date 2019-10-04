import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-intro-techno',
  templateUrl: './intro-techno.component.html',
  styleUrls: ['./intro-techno.component.scss'],
})
export class IntroTechnoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public log(event) {
    console.log(event);
  }

  public log2(event) {
    console.error(event);
  }
}
