import { Injectable, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
import { SuccessIcon } from '../../interface/success.interface';

@Injectable({ providedIn: 'root' })
export class MessageProvider {
  private successData: SuccessIcon;
  private template: TemplateRef<any>;
  constructor(private message: NzNotificationService) {}

  /**  Init with template context */
  public init(template) {
    this.template = template;
    this.initCheckVisibility();
  }

  /**  Display custom message */
  public create(successData: SuccessIcon) {
    this.successData = successData;
    this.message.template(this.template, { nzDuration: 0 });
  }

  /**  Return Success data to success component */
  public getSuccessData(): SuccessIcon {
    return this.successData;
  }

  /**  Emit when user left / focus website */
  private initCheckVisibility() {
    document.addEventListener('visibilitychange', function() {
      document.visibilityState;
    });
  }
}
