import { api } from './client';
import { Course } from '../../../shared/types';

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseSort = 'price' | 'title' | 'createdAt' | 'popularity';

export interface CoursesQuery {
  page?: number;
  limit?: number;
  category?: string;
  level?: CourseLevel;
  search?: string;
  sort?: CourseSort;
  order?: 'asc' | 'desc';
}

export interface CoursesListResponse {
  success: boolean;
  data: Course[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export const coursesAPI = {
  list: (query: CoursesQuery) =>
    api.get<CoursesListResponse>('/courses', { params: query }),
  getBySlug: (slug: string) =>
    api.get<{ success: boolean; data: Course }>(`/courses/${slug}`),
};


