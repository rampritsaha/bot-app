import { Layout } from 'react-grid-layout';

export interface Widget {
  id: string;
  title: string;
  content: string;
}

export interface LayoutState {
  layout: Layout[];
  widgets: Widget[];
}
