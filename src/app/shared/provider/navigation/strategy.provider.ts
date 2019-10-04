import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StrategyProvider {
  private strategy = new BehaviorSubject<string>('');
  private strategy$: Observable<string> = this.strategy.asObservable();

  public initStrategy(strategy: string) {
    this.strategy.next(strategy);
  }

  /** Set strategy */
  public setStrategy(strategy: string) {
    this.strategy.next(strategy);
  }

  /** Get strategy */
  public getStrategy(): Observable<any> {
    return this.strategy$;
  }

  /** Close observable */ s;
  public closeStrategy(): void {
    this.strategy.complete();
  }

  /** Reset strategy */
  public resetStrategy() {
    this.strategy.next('choice');
  }
}
