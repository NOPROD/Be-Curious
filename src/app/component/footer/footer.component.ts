import { Component, OnInit } from '@angular/core';
import { BasicIcon } from 'src/app/shared/interface/theme/basic-icon.interface';
import { ContactIcon } from 'src/app/shared/list/contact';
import { SuccessProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public icons: BasicIcon[] = ContactIcon;

  constructor(private successProvider: SuccessProvider) {}

  ngOnInit() {}

  /** Open slack in browser */
  public openSlack() {
    this.successProvider.checkSuccess(7, 6, '', '');
    window.open(
      'https://join.slack.com/t/becuriousgrp/shared_invite/enQtNjYxNjQxODY0NjkxLTYxNmU5ZmEwNDBjYzc1ZTNkNDM1ODM3YjY4YWNmMmY4NWE1OTYzZTU3NmY1N2Q3ZDBlMWRmMmI3ZjE0Zjg5ODI',
      '_blank'
    );
  }
}
