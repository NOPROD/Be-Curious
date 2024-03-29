import { Component, OnInit } from '@angular/core';
import { StorageProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  constructor(private storageProvider: StorageProvider) {}

  ngOnInit() {}
}
