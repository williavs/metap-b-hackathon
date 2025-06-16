/**
 * Core data models for MetaPrompter MVP
 */

export interface User {
  id: string;
  name: string;
  linkedinUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  expertiseLevel: 'beginner' | 'intermediate' | 'advanced';
  autoSave: boolean;
  notifications: boolean;
}

export interface Prompt {
  id: string;
  title: string;
  description?: string;
  content: string;
  strategy: PromptStrategy;
  voice: VoiceConfig;
  video: VideoConfig;
  tags: string[];
  estimatedTokens: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface PromptStrategy {
  type: 'creative' | 'analytical' | 'technical' | 'conversational';
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
}

export interface VoiceConfig {
  tone: 'professional' | 'casual' | 'friendly' | 'authoritative' | 'creative';
  style: 'concise' | 'detailed' | 'conversational' | 'formal';
  personality: string[];
  examples: string[];
}

export interface VideoConfig {
  format: 'tutorial' | 'presentation' | 'demo' | 'interview';
  duration: 'short' | 'medium' | 'long';
  style: 'animated' | 'live-action' | 'screen-recording' | 'mixed';
  requirements: string[];
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  promptIds: string[];
  checklist: ChecklistItem[];
  status: 'draft' | 'in-progress' | 'completed' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  required: boolean;
  order: number;
}

export interface ExportFormat {
  type: 'bolt' | 'markdown' | 'json' | 'txt';
  includeMetadata: boolean;
  includeStrategy: boolean;
  includeVoice: boolean;
  includeVideo: boolean;
}

export interface MetricsData {
  totalPrompts: number;
  totalProjects: number;
  averageTokensPerPrompt: number;
  mostUsedStrategy: string;
  completionRate: number;
  lastActivity: Date;
}

// API Response types for future integration
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}