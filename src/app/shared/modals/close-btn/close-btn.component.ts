import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.scss'],
})
export class CloseBtnComponent implements OnInit {
  constructor(private drawerRef: NzDrawerRef) {}

  ngOnInit() {}

  public closeModal(): void {
    this.drawerRef.close();
  }
}
