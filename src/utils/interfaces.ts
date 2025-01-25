export type allowed_timeframes = 'daily' | 'weekly' | 'monthly';

export interface activity_object {
  ID: string;
  title: string;
  timeframes: Record<
    allowed_timeframes,
    {
      current: number;
      previous: number;
    }
  >;
}

export interface activity_style {
  ID: string;
  icon: string;
  color: string;
}
