export interface Data {
  title: string;
  description: string;
  ling: string;
  image: string;
  tag: string;
  link: string;
  format: string;
}

export interface Tag {
  tag: string;
  color: string;
  hexa: string;
}

export interface UserData {
  item: string[];
  data: any;
  successUnlock: number[];
  articlesView: string[];
  max: number;
  numberVisite: number;
  mediaView: { video: number; article: number };
}

export interface UserEvent {
  newSuccess: boolean;
  success: Success;
}

export class Success {
  title: string;
  text: string;
  icon: string;
}
