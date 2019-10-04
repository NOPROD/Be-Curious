import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/interface/data.interface';
import { AnimeJsProvider, UtilsProvider } from 'src/app/shared/provider';
import {
  techList,
  otherTagList,
  formatList,
  langList,
} from 'src/app/shared/list/list';

@Component({
  selector: 'app-modal-intro-explain',
  templateUrl: './intro-explain.component.html',
  styleUrls: ['./intro-explain.component.scss'],
})
export class IntroExplainComponent {
  public allTechTag: Tag[] = techList.concat(otherTagList);
  public boxSize: string = '1px 1px 5px 1px ';
  public tagDefaultBackColor: string = '#ffffff';
  public introClass: string[] = [
    'intro-letters-container',
    'intro-left',
    'intro-bang',
    'intro-circle',
  ];

  public formatTag: Tag[] = formatList;
  public langTag: Tag[] = langList;
  public tagSelected: string[] = [];

  constructor(
    private animeProvider: AnimeJsProvider,
    private UtilsProvider: UtilsProvider
  ) {}

  ngAfterViewInit() {}
  // Do action on (un)select tag
  public selectedTag(selected: boolean, tag: Tag, tag$) {
    if (selected) {
      this.tagSelected.push(tag.tag);
      this.animeTag(
        tag$.elementRef.nativeElement.classList[1],
        this.boxSize + this.tagDefaultBackColor,
        this.boxSize + tag.hexa
      );
    } else {
      this.tagSelected = this.UtilsProvider.unselectArray(
        this.tagSelected,
        tag.tag
      );
      this.animeTag(
        tag$.elementRef.nativeElement.classList[1],
        this.boxSize + tag.hexa,
        this.boxSize + this.tagDefaultBackColor
      );
    }
  }

  // Anime Tag boxShadow
  private animeTag(className: string, defaultColor: string, newColor: string) {
    setTimeout(
      () => this.animeProvider.boxShadow(className, defaultColor, newColor),
      0
    );
  }
}
