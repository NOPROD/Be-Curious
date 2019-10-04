import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ColorFilter } from '../../interface/theme/color-filter.interface';
import { Tuto } from '../../interface/tuto/tutorial.interface';
import { tuto } from '../../list/tuto';

@Injectable({ providedIn: 'root' })
export class TutorialProvider {
  private tutorial = new BehaviorSubject<any>('');
  private colorFilter = new BehaviorSubject<ColorFilter>({
    filterState: 'blk-filter',
    pathState: 'path-blk',
    content: 'Mode nuit',
  });
  private colorFilter$: Observable<
    ColorFilter
  > = this.colorFilter.asObservable();
  private tutorial$: Observable<any> = this.tutorial.asObservable();

  /** Set tutorial */
  public setTutorial(tutorial: string) {
    this.getTuto().subscribe(tuto => this.tutorial.next(tuto));
  }

  /** Get tutorial */
  public getTutorial(): Observable<any> {
    return this.tutorial$;
  }

  /** Close observable */ s;
  public closeTutorial(): void {
    this.tutorial.complete();
  }

  /** get tuto */
  public getTuto(): Observable<Tuto> {
    return of(tuto);
  }

  /** Get colorFilter */
  public getColor(): Observable<ColorFilter> {
    return this.colorFilter$;
  }

  /** Set color filter */
  public setColor(colorFilter: ColorFilter): void {
    this.colorFilter.next(colorFilter);
  }
}
