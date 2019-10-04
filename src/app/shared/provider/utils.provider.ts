import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsProvider {
  /** Pop outValue from Array */
  public unselectArray(data: any[], outValue): string[] {
    return data.filter(dataValue => dataValue !== outValue);
  }
}
