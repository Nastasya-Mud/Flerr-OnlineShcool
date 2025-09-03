import { api } from './client';
import { User } from '../../../shared/types';

export const usersAPI = {
  // Get all users (Admin only)
  getAll: async (params?: any): Promise<{ data: User[] }> => {
    const response = await api.get('/users', { params });
    return { data: response.data.data };
  },

  // Get user by ID (Admin only)
  getById: async (id: string): Promise<{ data: User }> => {
    const response = await api.get(`/users/${id}`);
    return { data: response.data.data };
  },

  // Update user (Admin only)
  update: async (id: string, userData: any): Promise<{ data: User }> => {
    const response = await api.put(`/users/${id}`, userData);
    return { data: response.data.data };
  },

  // Delete user (Admin only)
  delete: async (id: string): Promise<{ data: { message: string } }> => {
    const response = await api.delete(`/users/${id}`);
    return { data: { message: response.data.message } };
  }
};
