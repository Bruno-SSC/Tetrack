export type device_type = 'mobile' | 'tablet' | 'desktop';

export interface activity_object {
  ID: string;
  name: string;
  accounted_time: number;
  before_color: string;
  after_img: string;
}

export interface activity_list {
  [key: string]: activity_object[];
}
