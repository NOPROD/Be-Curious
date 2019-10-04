import { Injectable } from '@angular/core';
import { UserData } from '../../interface/data.interface';
import { MessageProvider } from '../information/message.provider';
import { UserProvider } from './user.provider';

@Injectable({ providedIn: 'root' })
export class UserFollowProvider {
  private userData: UserData;

  constructor(
    private userProvider: UserProvider,
    private messageProvider: MessageProvider
  ) {
    this.userProvider
      .getData()
      .subscribe(userData => (this.userData = userData));
  }

  /**  Data Check logic */
  public haveSeenData(dataId: any, format: string): void {
    this.updateUserData(dataId, format);
  }

  /** Check if data id exist */
  public isExist(dataId: any): boolean {
    return this.userData.articlesView.includes(dataId);
  }

  /** Add data id to user data */

  private updateUserData(dataId: any, format: string) {
    if (this.userData.successUnlock) {
      if (!this.isExist(dataId)) {
        this.userData.articlesView.push(dataId);
        this.updateUserMediaCount(format);
        this.userProvider.updateUserdata(this.userData);
      }
    }
  }

  /**  Update user count */
  private updateUserMediaCount(format: string) {
    if (format === 'Article') {
      this.userData.mediaView.article += 1;
    } else {
      this.userData.mediaView.video += 1;
    }
  }
}
