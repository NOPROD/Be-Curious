import { Explanation, ShardsResponse } from 'elasticsearch';

export interface SearchResponse<T> {
  took: number;
  timed_out: boolean;
  _scroll_id?: string;
  _shards: ShardsResponse;
  hits: {
    total: number;
    max_score: number;
    hits: SearchResponseHits<T>[];
  };
  aggregations?: any;
  suggest?: {
    'data.description': [
      {
        length: number;
        offset: number;
        options?: SearchResponseSuggestOptions[];
        text: string;
      }
    ];
  };
}

export interface SearchResponseSuggestOptions {
  freq: number;
  score: number;
  text: string;
}

export interface SearchResponseHits<T> {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: { data: { T } };
  _version?: number;
  _explanation?: Explanation;
  fields?: any;
  highlight?: any;
  inner_hits?: any;
  matched_queries?: string[];
  sort?: string[];
}
