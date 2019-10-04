import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimationBasic } from '../../interface/theme/animation.interface';
import { animeIntroConst } from '../../list/params';
import { AnimeJsProvider } from '../animation/animeJs.provider';
import { StorageProvider } from '../storage.provider';

@Injectable({ providedIn: 'root' })
export class IntroProvider {
  private animeParams: AnimationBasic[] = animeIntroConst;

  constructor(
    private storageProvider: StorageProvider,
    public animeProvider: AnimeJsProvider
  ) {}

  /** Set firstView data */
  public hasSeen(): Observable<any> {
    return this.storageProvider.set('firstView', true);
  }

  /**  Check firstView data */
  public checkFirstView(): Observable<any> {
    return this.storageProvider.get('firstView');
  }

  /**  Go next step */
  public nextStep() {
    this.animeProvider.fadeInOut(this.animeParams);
  }

  /**  Go previous step */
  public previousStep() {
    this.animeProvider.fadeInOut(this.animeParams);
  }
}
