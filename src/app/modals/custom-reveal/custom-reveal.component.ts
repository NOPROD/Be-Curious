import { Component, OnInit } from '@angular/core';
import { AnimeJsProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-custom-reveal',
  templateUrl: './custom-reveal.component.html',
  styleUrls: ['./custom-reveal.component.scss'],
})
export class CustomRevealComponent implements OnInit {
  constructor(private animeProvider: AnimeJsProvider) {}

  ngOnInit() {}
}
