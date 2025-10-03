import { api } from './client';
import { Course } from '../../../shared/types';

export const coursesAPI = {
  // Get all courses (alias for compatibility)
  list: async (params?: any): Promise<{ data: Course[] }> => {
    const response = await api.get('/courses', { params });
    return { data: response.data.data };
  },

  // Get all courses
  getAll: async (params?: any): Promise<{ data: Course[] }> => {
    const response = await api.get('/courses', { params });
    return { data: response.data.data };
  },

  // Get course by ID
  getById: async (id: string): Promise<{ data: Course }> => {
    const response = await api.get(`/courses/${id}`);
    return { data: response.data.data };
  },

  // Get course by slug
  getBySlug: async (slug: string): Promise<{ data: Course }> => {
    const response = await api.get(`/courses/slug/${slug}`);
    return { data: response.data.data };
  },

  // Create course (Admin only)
  create: async (courseData: any): Promise<{ data: Course }> => {
    const response = await api.post('/courses', courseData, { timeout: 30000 });
    return { data: response.data.data };
  },

  // Update course (Admin only)
  update: async (id: string, courseData: any): Promise<{ data: Course }> => {
    const response = await api.put(`/courses/${id}`, courseData);
    return { data: response.data.data };
  },

  // Delete course (Admin only)
  delete: async (id: string): Promise<{ data: { message: string } }> => {
    const response = await api.delete(`/courses/${id}`);
    return { data: { message: response.data.message } };
  }
};