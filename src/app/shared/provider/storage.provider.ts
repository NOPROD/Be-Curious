import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StorageProvider {
  constructor(private localStorage: LocalStorage) {}

  /** Get data from local storage */
  public get(item: string): Observable<any> {
    return this.localStorage.getItem(item).pipe(catchError(err => of(err)));
  }

  /** Set data from local storage */
  public set(item: string, data): Observable<boolean> {
    return this.localStorage
      .setItem(item, data)
      .pipe(catchError(err => of(err)));
  }

  /** Remove data from local storage */
  public remove(item: string): Observable<boolean> {
    return this.localStorage.removeItem(item).pipe(catchError(err => of(err)));
  }

  /** Clear all data from local storage */
  public clearAll(): Observable<boolean> {
    return this.localStorage.clear().pipe(catchError(err => of(err)));
  }
}
