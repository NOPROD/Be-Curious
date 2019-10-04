import { Injectable } from '@angular/core';
import { UserData } from '../../interface/data.interface';
import { allSuccessIcons } from '../../list/success';
import { MessageProvider } from '../information/message.provider';
import { UserProvider } from '../user/user.provider';

@Injectable({ providedIn: 'root' })
export class SuccessProvider {
  private userData: UserData;
  private dateH: number;

  constructor(
    private userProvider: UserProvider,
    private messageProvider: MessageProvider
  ) {
    this.userProvider.getData().subscribe(userData => {
      this.userData = userData;
      this.checkSuccessOwlCoffee();
    });
    this.dateH = new Date().getHours();
  }

  /** Check all success */
  public checkSuccess(
    successId: number,
    successIconId: number,
    data: any,
    check: any
  ) {
    console.log(this.userData);
    if (this.userData.successUnlock) {
      if (!this.userData.successUnlock.includes(successId) && data === check) {
        this.messageProvider.create(allSuccessIcons[successIconId]);
        this.userData.successUnlock.push(successId);
        this.userProvider.updateUserdata(this.userData);
      }
    }
  }

  /** Check something */
  public checkSuccessOwlCoffee() {
    if (this.dateH > 6 && this.dateH < 10) {
      this.checkSuccess(14, 13, '', '');
    } else if (this.dateH > -1 && this.dateH < 7) {
      console.log('hi');
      this.checkSuccess(13, 12, '', '');
    }
  }
}
