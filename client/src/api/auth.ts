import { api } from './client';
import { User, LoginRequest, RegisterRequest, AuthResponse } from '../../../shared/types';

export const authAPI = {
  // Login user
  login: (data: LoginRequest): Promise<{ data: AuthResponse }> =>
    api.post('/auth/login', data),

  // Register user
  register: (data: RegisterRequest): Promise<{ data: AuthResponse }> =>
    api.post('/auth/register', data),

  // Get current user
  getMe: (): Promise<{ data: User }> =>
    api.get('/auth/me'),

  // Update user profile
  updateProfile: (data: Partial<User>): Promise<{ data: User }> =>
    api.put('/auth/profile', data),

  // Change password
  changePassword: (data: { currentPassword: string; newPassword: string }): Promise<{ data: { message: string } }> =>
    api.put('/auth/change-password', data),

  // Forgot password
  forgotPassword: (data: { email: string }): Promise<{ data: { message: string } }> =>
    api.post('/auth/forgot-password', data),

  // Reset password
  resetPassword: (data: { token: string; newPassword: string }): Promise<{ data: { message: string } }> =>
    api.post('/auth/reset-password', data),
}; 