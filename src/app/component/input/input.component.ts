import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchResponse } from 'elasticsearch';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Data, Tag } from 'src/app/shared/interface/data.interface';
import { ElasticProvider } from 'src/app/shared/provider/elastic.provider';
import {
  techList,
  otherTagList,
  formatList,
  langList,
} from 'src/app/shared/list/list';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() asSearch: EventEmitter<SearchResponse<{}>> = new EventEmitter();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();
  @Output() isEmpty: EventEmitter<boolean> = new EventEmitter();

  public validateForm: FormGroup;

  public response: Observable<SearchResponse<Data>>;

  public techOptions: Tag[] = techList;
  public otherTag: Tag[] = otherTagList;
  public formatOptions: Tag[] = formatList;
  public langOptions: Tag[] = langList;
  public options: string[] = [''];

  public inputValue: string | null;

  public panel = {
    active: false,
    disabled: false,
  };

  constructor(private elasticProvider: ElasticProvider) {}

  /**  */
  ngAfterViewInit() {
    this.autoSuggestion();
  }

  /** Auto suggest word on input event */
  public autoSuggestion() {
    fromEvent(document.getElementById('input-search'), 'input')
      .pipe(
        debounceTime(100),
        //@ts-ignore
        map(input => input.srcElement.value),
        distinctUntilChanged()
      )
      .subscribe(search => {
        if (search.length === 0) {
          this.isEmpty.emit();
        } else {
          this.options.length = 0;
          this.elasticProvider.gotsuggest(search).then(resp => {
            resp.suggest['data.description'].forEach(suggest => {
              if (suggest.options.length > 0 && search.lastIndexOf(' ') > -1) {
                this.checkSuggestion(search, suggest);
              } else if (
                suggest.options.length > 0 &&
                search.lastIndexOf(' ') === -1
              ) {
                suggest.options.forEach(option =>
                  this.options.push(option.text)
                );
              }
            });
            this.asSearch.emit(resp);
            this.isLoading.emit(false);
          });
        }
      });
  }

  public toogleSettings() {
    this.panel.active = this.panel.active ? false : true;
  }

  private checkSuggestion(search: string, suggest) {
    let lastIndex = search.lastIndexOf(' ');
    let text = search.substring(0, lastIndex);
    suggest.options.forEach(option => {
      var su = text + ' ' + option.text;
      console.log(text + option.text);
      this.options.push(su);
    });
  }
}
