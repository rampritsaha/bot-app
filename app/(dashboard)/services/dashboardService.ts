import axios from 'axios';
import { Layout } from 'react-grid-layout';
import { Widget } from '../types/dashboard';

const BASE_URL = 'http://localhost:3001';

export const dashboardService = {
  async fetchLayout(): Promise<Layout[]> {
    const response = await axios.get<Layout[]>(`${BASE_URL}/layout`);
    return response.data;
  },

  async fetchWidgets(): Promise<Widget[]> {
    const response = await axios.get<Widget[]>(`${BASE_URL}/widgets`);
    return response.data;
  },

  async saveLayout(layout: Layout[]): Promise<void> {
    await axios.post(`${BASE_URL}/layout`, { layout });
  }
};
