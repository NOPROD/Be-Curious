export interface Tuto {
  tutoTitle: string;
  intro: string[];
  image: string;
  content: {
    subTitle: string;
    intro: string[];
    subText: string[];
    codeContent: string[];
    image: string;
    textImage: string;
    underText: string[];
    finalText: string[];
  }[];
}
