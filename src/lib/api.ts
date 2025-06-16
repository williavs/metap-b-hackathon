/**
 * API layer for future backend integration
 * Currently returns mocked promises for development
 */

import type { 
  User, 
  Prompt, 
  Project, 
  ApiResponse, 
  PaginatedResponse,
  MetricsData 
} from '@/types';

// Mock delay to simulate network requests
const mockDelay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

// User API
export const userApi = {
  async getCurrentUser(): Promise<ApiResponse<User | null>> {
    await mockDelay();
    return {
      data: null,
      success: true,
      message: 'User fetched successfully'
    };
  },

  async updateUser(userData: Partial<User>): Promise<ApiResponse<User>> {
    await mockDelay();
    return {
      data: userData as User,
      success: true,
      message: 'User updated successfully'
    };
  },

  async deleteUser(userId: string): Promise<ApiResponse<void>> {
    await mockDelay();
    return {
      data: undefined,
      success: true,
      message: 'User deleted successfully'
    };
  }
};

// Prompts API
export const promptsApi = {
  async getPrompts(page = 1, limit = 10): Promise<PaginatedResponse<Prompt>> {
    await mockDelay();
    return {
      data: [],
      success: true,
      message: 'Prompts fetched successfully',
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0
      }
    };
  },

  async getPrompt(id: string): Promise<ApiResponse<Prompt | null>> {
    await mockDelay();
    return {
      data: null,
      success: true,
      message: 'Prompt fetched successfully'
    };
  },

  async createPrompt(promptData: Omit<Prompt, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Prompt>> {
    await mockDelay();
    return {
      data: promptData as Prompt,
      success: true,
      message: 'Prompt created successfully'
    };
  },

  async updatePrompt(id: string, promptData: Partial<Prompt>): Promise<ApiResponse<Prompt>> {
    await mockDelay();
    return {
      data: promptData as Prompt,
      success: true,
      message: 'Prompt updated successfully'
    };
  },

  async deletePrompt(id: string): Promise<ApiResponse<void>> {
    await mockDelay();
    return {
      data: undefined,
      success: true,
      message: 'Prompt deleted successfully'
    };
  }
};

// Projects API
export const projectsApi = {
  async getProjects(page = 1, limit = 10): Promise<PaginatedResponse<Project>> {
    await mockDelay();
    return {
      data: [],
      success: true,
      message: 'Projects fetched successfully',
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0
      }
    };
  },

  async getProject(id: string): Promise<ApiResponse<Project | null>> {
    await mockDelay();
    return {
      data: null,
      success: true,
      message: 'Project fetched successfully'
    };
  },

  async createProject(projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Project>> {
    await mockDelay();
    return {
      data: projectData as Project,
      success: true,
      message: 'Project created successfully'
    };
  },

  async updateProject(id: string, projectData: Partial<Project>): Promise<ApiResponse<Project>> {
    await mockDelay();
    return {
      data: projectData as Project,
      success: true,
      message: 'Project updated successfully'
    };
  },

  async deleteProject(id: string): Promise<ApiResponse<void>> {
    await mockDelay();
    return {
      data: undefined,
      success: true,
      message: 'Project deleted successfully'
    };
  }
};

// Analytics API
export const analyticsApi = {
  async getMetrics(): Promise<ApiResponse<MetricsData>> {
    await mockDelay();
    return {
      data: {
        totalPrompts: 0,
        totalProjects: 0,
        averageTokensPerPrompt: 0,
        mostUsedStrategy: 'creative',
        completionRate: 0,
        lastActivity: new Date()
      },
      success: true,
      message: 'Metrics fetched successfully'
    };
  }
};