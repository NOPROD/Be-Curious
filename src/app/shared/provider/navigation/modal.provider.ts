import { Injectable } from '@angular/core';
import {
  NzDrawerService,
  NzModalService,
  NzDrawerRef,
  NzDrawerPlacement,
} from 'ng-zorro-antd';

@Injectable()
export class ModalProvider {
  private activeDrawer: NzDrawerRef;

  constructor(
    private modalService: NzModalService,
    private drawerService: NzDrawerService
  ) {}

  /** Open drawer */
  public createDrawer(
    drawerComponent: any,
    placement: NzDrawerPlacement,
    className?: string
  ) {
    this.activeDrawer = this.drawerService.create({
      nzContent: drawerComponent,
      nzMask: false,
      nzMaskClosable: true,
      nzClosable: false,
      nzPlacement: placement,
      nzWrapClassName: className,
    });
  }

  /** Close drawer */
  public closeDrawer(): void {
    this.activeDrawer.close();
  }

  /** Open modal */
  public createModal(modalContent: any) {
    this.modalService.create({ nzContent: modalContent });
  }
}
