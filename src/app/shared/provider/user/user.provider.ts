import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../../interface/data.interface';
import { allSuccessIcons } from '../../list/success';
import { ElasticProvider } from '../elastic.provider';
import { MessageProvider } from '../information/message.provider';
import { IntroProvider } from '../intro/intro.provider';
import { StorageProvider } from '../storage.provider';

@Injectable({ providedIn: 'root' })
export class UserProvider {
  private userData = new BehaviorSubject<UserData>({
    articlesView: null,
    data: null,
    item: null,
    successUnlock: null,
    max: 0,
    mediaView: { article: 0, video: 0 },
    numberVisite: 0,
  });
  private userData$: Observable<UserData> = this.userData.asObservable();

  constructor(
    private introProvider: IntroProvider,
    private messageProvider: MessageProvider,
    private storageProvider: StorageProvider,
    private elasticProvider: ElasticProvider
  ) {}

  /**  Init data logic */
  public init(): void {
    this.checkFirstVisit();
  }

  /** Update local data for all view */
  public updateUserdata(userData: UserData): void {
    this.userData.next(userData);
    this.storageProvider.set('userData', userData).subscribe(data => {
      console.log('Local data updated !');
      console.log(userData);
    });
  }

  /**  Return user data */
  public getData(): Observable<UserData> {
    return this.userData$;
  }

  /** Check if it's user first visit with this browser
   * Bad news : can't use my checkSuccess function here, circular dependency if we do that....
   */
  private checkFirstVisit(): void {
    this.introProvider.checkFirstView().subscribe(firstView => {
      if (!firstView) {
        this.initMax().then(max => {
          this.messageProvider.create(allSuccessIcons[2]);
          this.updateUserdata({
            articlesView: [],
            data: ['Not used now'],
            item: ['Not used now'],
            successUnlock: [3],
            max: max.hits.total.valueOf(),
            mediaView: { article: 0, video: 0 },
            numberVisite: 1,
          });
          this.introProvider.hasSeen().subscribe();
        });
      } else {
        this.oldUserData();
      }
    });
  }

  /**  Get old local user data and update data for all */
  private oldUserData(): void {
    this.storageProvider.get('userData').subscribe(userData => {
      if (userData) {
        userData.numberVisite += 1;
        this.updateUserdata(userData);
      }
    });
  }

  /** Init max article */

  private initMax() {
    return this.elasticProvider.searchAll();
  }
}
