import { api } from './client';
import { User, LoginRequest, RegisterRequest, AuthResponse } from '../../../shared/types';

export const authAPI = {
  // Login user
  login: async (data: LoginRequest): Promise<{ data: AuthResponse }> => {
    const response = await api.post('/auth/login', data);
    return { data: response.data.data };
  },

  // Register user
  register: async (data: RegisterRequest): Promise<{ data: AuthResponse }> => {
    const response = await api.post('/auth/register', data);
    return { data: response.data.data };
  },

  // Get current user
  getMe: async (): Promise<{ data: User }> => {
    const response = await api.get('/auth/me');
    return { data: response.data.data };
  },

  // Update user profile
  updateProfile: async (data: Partial<User>): Promise<{ data: User }> => {
    const response = await api.put('/auth/profile', data);
    return { data: response.data.data };
  },

  // Change password
  changePassword: async (data: { currentPassword: string; newPassword: string }): Promise<{ data: { message: string } }> => {
    const response = await api.put('/auth/change-password', data);
    return { data: { message: response.data.message } };
  },

  // Forgot password
  forgotPassword: async (data: { email: string }): Promise<{ data: { message: string } }> => {
    const response = await api.post('/auth/forgot-password', data);
    return { data: { message: response.data.message } };
  },

  // Reset password
  resetPassword: async (data: { token: string; newPassword: string }): Promise<{ data: { message: string } }> => {
    const response = await api.post('/auth/reset-password', data);
    return { data: { message: response.data.message } };
  },
}; 