import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/shared/interface/data.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  @Input() listOfOption: Tag[];
  @Input() placeHolder: string;

  public listOfSelectedValue: string[] = [];

  public isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }

  public nzOpenChange(event) {
    console.log('nzOpenChange');
    console.log(event);
    console.log(this.listOfSelectedValue);
  }

  public nzOnSearch(event) {
    console.log('nzOnSearch');
    console.log(event);
  }
}
