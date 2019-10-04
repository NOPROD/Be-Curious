import { Component, Input, OnInit } from '@angular/core';
import { AnimeJsProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss'],
})
export class SecondHeaderComponent implements OnInit {
  @Input() title: string;

  public headerTitle: string[] = [];

  constructor(private animeProvider: AnimeJsProvider) {}

  ngOnInit() {
    this.stringToLetters();
  }

  ngAfterViewInit() {
    this.animeProvider.secondHeader();
  }

  /** Convert string to array to generate span on every letters */
  private stringToLetters(): void {
    for (let i = 0; i < this.title.length; i++) {
      this.headerTitle.push(this.title[i]);
    }
  }
}
