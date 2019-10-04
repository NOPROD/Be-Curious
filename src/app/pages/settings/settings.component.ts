import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/shared/interface/data.interface';
import {
  AnimeJsProvider,
  UserProvider,
  StorageProvider
} from 'src/app/shared/provider';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public title: string = 'Paramètres';
  private userData: UserData;

  constructor(
    private animeProvider: AnimeJsProvider,
    private userProvider: UserProvider,
    private storageProvider: StorageProvider
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => this.animeProvider.fadeInMain(), 0);
    this.initUserData();
    console.log(this.userData);
  }

  // Clear all
  public deleteData() {
    this.storageProvider.clearAll().subscribe();
  }

  // User data for use in view
  private initUserData(): void {
    this.userProvider.getData().subscribe(userData => {
      this.userData = userData;
    });
  }
}
