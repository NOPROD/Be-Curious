import { Component } from '@angular/core';
import { BasicIcon } from 'src/app/shared/interface/theme/basic-icon.interface';
import { ContactIcon } from 'src/app/shared/list/contact';
import { contactConst } from 'src/app/shared/list/params';
import { AnimeJsProvider, SuccessProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public toogle: boolean = false;
  public icons: BasicIcon[] = ContactIcon;

  constructor(
    private animeProvider: AnimeJsProvider,
    private successProvider: SuccessProvider
  ) {}

  // Toogle contact div
  public displayMenu() {
    if (!this.toogle) {
      this.animeProvider.fade(contactConst[1]);
    } else {
      this.animeProvider.fade(contactConst[0]);
    }
    this.toogle = !this.toogle;
  }

  /** Open slack in browser */
  public openSlack() {
    if (this.toogle) {
      this.successProvider.checkSuccess(7, 6, '', '');
      window.open(
        'https://join.slack.com/t/becuriousgrp/shared_invite/enQtNzI0MjM2Mzk3NDU4LWM5YzFjMjdjNTM0MDJhYWU3MTQ3Njc4MmE4MjYxM2E4OGM0ZWNiMjM0ZjIzMmQzMjQyM2U5ZjUxZDZjNzYxN2U',
        '_blank'
      );
    }
  }
}
