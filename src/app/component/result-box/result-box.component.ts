import { Component, Input, OnInit } from '@angular/core';
import { Data, Tag } from 'src/app/shared/interface/data.interface';
import { SuccessProvider, UserFollowProvider } from 'src/app/shared/provider';
import {
  otherTagList,
  techList,
  formatList,
  langList,
  defaultTag,
} from 'src/app/shared/list/list';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent implements OnInit {
  @Input() data: Data;
  @Input() dataId: string;
  @Input() loading: boolean;

  public defaultTag: Tag = defaultTag;
  public tags: Tag[] = [];
  public allTechTag: Tag[] = techList.concat(
    otherTagList,
    formatList,
    langList
  );

  constructor(
    private successProvider: SuccessProvider,
    private followService: UserFollowProvider
  ) {}

  ngOnInit(): void {
    this.initTags();
  }

  /** Open link in browser */
  public openLink(): void {
    if (this.data.format === 'Article') {
      this.successProvider.checkSuccess(5, 4, this.data.format, 'Article');
    } else {
      this.successProvider.checkSuccess(2, 1, this.data.format, 'Video');
    }
    this.followService.haveSeenData(this.dataId, this.data.format);
    window.open(this.data.link, '_blank');
  }

  /** Get all tag for this result */
  private initTags(): void {
    this.data.tag.split(',').forEach(tag => {
      this.tags.push(this.allTechTag.find(allTech => allTech.tag === tag));
    });
  }
}
