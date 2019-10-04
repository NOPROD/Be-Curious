import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from 'src/app/shared/interface/data.interface';
import { AnimeJsProvider, ElasticProvider } from 'src/app/shared/provider';
import {
  SearchResponseSuggestOptions,
  SearchResponseHits,
  SearchResponse,
} from 'src/app/shared/interface/search-response.interface';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {
  public suggestion$: Observable<SearchResponseSuggestOptions[]>;
  public results$: Observable<SearchResponseHits<Data>[]>;

  public loading: boolean;
  public svgSpinLoader: string = '../../../assets/images/tail-spin.svg';

  constructor(
    private elasticProvider: ElasticProvider,
    private animeProvider: AnimeJsProvider
  ) {}

  /** Init component and get all items from back - Dismiss blur */
  ngOnInit() {
    document.body.classList.add('body-h-auto');
    this.searchAll();
  }

  ngAfterViewInit() {
    setTimeout(() => this.animeProvider.fadeInMain(), 0);
  }

  /** Get all result */
  public searchAll() {
    this.elasticProvider.searchAll().then(results => {
      this.results$ = of(
        results.hits.hits.filter(result => result._source.data)
      );
      this.loading = false;
    });
  }

  /** Get search result from input asSearch event
   *  Give result to result-box component
   */
  public search(search: SearchResponse<Data>): void {
    this.results$ = of(search.hits.hits);
    search.suggest['data.description'].forEach(suggestion => {
      if (suggestion.options) {
        this.suggestion$ = of(suggestion.options);
      }
    });
  }

  /** Active - Dismiss blur */
  public setStatus(loading: boolean) {
    this.loading = loading;
  }

  /** Open modal -  */
  public openModal(): void {
    this.animeProvider.morphingIn('#intro');
  }

  ngOnDestroy() {
    document.body.classList.remove('body-h-auto');
  }
}
