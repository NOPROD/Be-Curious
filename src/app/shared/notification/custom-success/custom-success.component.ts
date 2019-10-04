import { Component, Input, OnInit } from '@angular/core';
import { SuccessIcon } from '../../interface/success.interface';
import { MessageProvider } from '../../provider';

@Component({
  selector: 'app-custom-success',
  templateUrl: './custom-success.component.html',
  styleUrls: ['./custom-success.component.scss'],
})
export class CustomSuccessComponent implements OnInit {
  public successData: SuccessIcon;
  constructor(private messageProvider: MessageProvider) {}

  ngOnInit() {
    this.successData = this.messageProvider.getSuccessData();
  }
}
