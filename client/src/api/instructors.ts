import { api } from './client';

export const instructorsAPI = {
  getAll: async (params?: any): Promise<{ data: any[] }> => {
    const response = await api.get('/instructors', { params });
    const data = response.data?.data?.instructors || response.data?.data || [];
    return { data };
  },
  getFeatured: async (): Promise<{ data: any[] }> => {
    const response = await api.get('/instructors/featured/list');
    const data = response.data?.data || [];
    return { data };
  },
  getById: async (id: string): Promise<{ data: any }> => {
    const response = await api.get(`/instructors/${id}`);
    return { data: response.data?.data };
  },
  create: async (payload: any): Promise<{ data: any }> => {
    const response = await api.post('/instructors', payload);
    return { data: response.data?.data };
  },
  update: async (id: string, payload: any): Promise<{ data: any }> => {
    const response = await api.put(`/instructors/${id}`, payload);
    return { data: response.data?.data };
  },
  delete: async (id: string): Promise<{ data: { message: string } }> => {
    const response = await api.delete(`/instructors/${id}`);
    return { data: { message: response.data?.message } };
  },
};


