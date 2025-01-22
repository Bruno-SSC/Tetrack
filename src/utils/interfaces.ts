export type device_type = 'mobile' | 'tablet' | 'desktop';

export interface nav_items {
  title: string;
  options?: Array<{
    name: string;
    icon_path?: string;
  }>;
}
