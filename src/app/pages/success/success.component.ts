import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/interface/data.interface';
import { SuccessIcon } from 'src/app/shared/interface/success.interface';
import { allSuccessIcons } from 'src/app/shared/list/success';
import { AnimeJsProvider, UserProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  public title: string = 'Profil';
  public count: number = 0;

  public userData: UserData;

  public allSuccess: SuccessIcon[] = allSuccessIcons;
  constructor(
    private animeProvider: AnimeJsProvider,
    private userProvider: UserProvider
  ) {}

  ngOnInit() {
    this.initUserData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animeProvider.fadeInMain();
      this.setSuccess();
    }, 0);
  }

  // User data for use in view
  private initUserData(): void {
    this.userProvider.getData().subscribe(userData => {
      this.userData = userData;
    });
  }

  // Compare local success const to user data
  // Seriously Chrome Chrome, why you need so many timeOut ?
  private setSuccess(): void {
    setTimeout(
      () =>
        this.allSuccess.map(success => {
          success.enabled = this.userData.successUnlock.includes(success.id);
          success.enabled ? this.countSuccess() : null;
        }),
      250
    );
  }

  // Count success
  private countSuccess() {
    this.count += 1;
  }
}
