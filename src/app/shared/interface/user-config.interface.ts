import { Tag } from './data.interface';

export interface UserConfig {
  userConfig: {
    theme: string;
    tag: { techTag: Tag[]; otherTag: Tag[] };
    langWebsite: string;
    langArticles: string;
    format: string;
  };
}
