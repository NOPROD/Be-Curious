import { animeMenuConst } from './shared/list/params';
import { ElasticProvider } from './shared/provider/elastic.provider';
import {
  AnimeJsProvider,
  MessageProvider,
  UserProvider,
  SuccessProvider,
} from './shared/provider';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('template') template: TemplateRef<{}>;
  title = 'be-curious';
  private menuParams = animeMenuConst;
  private toogle = false;

  constructor(
    private elastic: ElasticProvider,
    private messageProvider: MessageProvider,
    private animeProvider: AnimeJsProvider,
    private userProvider: UserProvider,
    private successProvider: SuccessProvider
  ) {
    this.connectToElastic();
  }

  ngAfterViewInit() {
    this.userProvider.init();
    this.messageProvider.init(this.template);
    this.successProvider.checkSuccessOwlCoffee();
  }

  // Toogle menu for mobile device
  public displayMenu() {
    if (!this.toogle) {
      this.animeProvider.fade(this.menuParams[1]);
    } else {
      this.animeProvider.fade(this.menuParams[0]);
    }
    this.toogle = !this.toogle;
  }
  /** Connect to elactic back-end */
  private connectToElastic(): void {
    this.elastic.connect();
  }
}
