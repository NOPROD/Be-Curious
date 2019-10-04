import { Injectable } from '@angular/core';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class AlertProvider {
  constructor(private alert: NzMessageService) {}

  /** Display Alert */
  public createAlert(
    type: 'success' | 'error' | 'warning',
    message: string,
    args?: NzMessageDataOptions
  ) {
    this.alert.create(type, message, args);
  }
}
