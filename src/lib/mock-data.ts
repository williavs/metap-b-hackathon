/**
 * Mock data for development and testing
 */

import type { User, Prompt, Project, ChecklistItem } from '@/types';
import { generateId } from './utils';

export const mockUser: User = {
  id: generateId(),
  name: 'John Doe',
  linkedinUrl: 'https://linkedin.com/in/johndoe',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date(),
};

export const mockPrompts: Prompt[] = [
  {
    id: generateId(),
    title: 'Creative Writing Assistant',
    description: 'A prompt for generating creative content',
    content: 'You are a creative writing assistant. Help me write engaging content that captures the reader\'s attention...',
    strategy: {
      type: 'creative',
      temperature: 0.8,
      maxTokens: 1000,
      topP: 0.9,
      frequencyPenalty: 0.1,
      presencePenalty: 0.1,
    },
    voice: {
      tone: 'creative',
      style: 'conversational',
      personality: ['imaginative', 'engaging', 'inspiring'],
      examples: ['Tell me a story about...', 'Describe a world where...'],
    },
    video: {
      format: 'tutorial',
      duration: 'medium',
      style: 'animated',
      requirements: ['Clear narration', 'Visual examples', 'Step-by-step breakdown'],
    },
    tags: ['creative', 'writing', 'content'],
    estimatedTokens: 250,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
    userId: mockUser.id,
  },
  {
    id: generateId(),
    title: 'Technical Documentation Helper',
    description: 'Assists with creating clear technical documentation',
    content: 'You are a technical documentation specialist. Help me create clear, comprehensive documentation...',
    strategy: {
      type: 'technical',
      temperature: 0.3,
      maxTokens: 1500,
      topP: 0.7,
      frequencyPenalty: 0.0,
      presencePenalty: 0.0,
    },
    voice: {
      tone: 'professional',
      style: 'detailed',
      personality: ['precise', 'clear', 'methodical'],
      examples: ['Document the API endpoint...', 'Explain the installation process...'],
    },
    video: {
      format: 'demo',
      duration: 'long',
      style: 'screen-recording',
      requirements: ['Screen capture', 'Code examples', 'Real-time demonstration'],
    },
    tags: ['technical', 'documentation', 'api'],
    estimatedTokens: 375,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date(),
    userId: mockUser.id,
  },
];

export const mockChecklistItems: ChecklistItem[] = [
  {
    id: generateId(),
    title: 'Define project objectives',
    description: 'Clearly outline what you want to achieve',
    completed: true,
    required: true,
    order: 1,
  },
  {
    id: generateId(),
    title: 'Create initial prompts',
    description: 'Draft your first set of prompts',
    completed: true,
    required: true,
    order: 2,
  },
  {
    id: generateId(),
    title: 'Configure voice settings',
    description: 'Set tone and style preferences',
    completed: false,
    required: false,
    order: 3,
  },
  {
    id: generateId(),
    title: 'Test and refine',
    description: 'Iterate on your prompts based on results',
    completed: false,
    required: true,
    order: 4,
  },
  {
    id: generateId(),
    title: 'Export final version',
    description: 'Generate the final prompt for use',
    completed: false,
    required: true,
    order: 5,
  },
];

export const mockProjects: Project[] = [
  {
    id: generateId(),
    title: 'Content Marketing Campaign',
    description: 'AI-powered content creation for Q1 marketing',
    promptIds: [mockPrompts[0].id],
    checklist: mockChecklistItems,
    status: 'in-progress',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date(),
    userId: mockUser.id,
  },
  {
    id: generateId(),
    title: 'API Documentation Overhaul',
    description: 'Comprehensive documentation update using AI assistance',
    promptIds: [mockPrompts[1].id],
    checklist: mockChecklistItems.slice(0, 3),
    status: 'draft',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date(),
    userId: mockUser.id,
  },
];