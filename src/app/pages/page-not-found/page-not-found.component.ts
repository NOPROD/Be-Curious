import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AnimeJsProvider,
  SuccessProvider,
  UserProvider,
} from 'src/app/shared/provider';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    private router: Router,
    private animeProvider: AnimeJsProvider,
    private userProvider: UserProvider,
    private successProvider: SuccessProvider
  ) {}

  ngOnInit() {
    this.checkSuccess();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animeProvider.fadeInMain();
    }, 0);
  }

  /** back to home page */
  public backHome() {
    this.router.navigate(['/home']);
  }

  /** check something */
  private checkSuccess(): void {
    this.userProvider
      .getData()
      .subscribe(() => this.successProvider.checkSuccess(15, 14, '', ''));
  }
}
