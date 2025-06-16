/**
 * Design system constants and configuration
 */

export const DESIGN_TOKENS = {
  colors: {
    brand: {
      primary: '#2563eb',
      dark: '#1d4ed8',
      light: '#3b82f6',
    },
    accent: '#f59e0b',
    surface: {
      light: '#ffffff',
      dark: '#0f172a',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
  },
  motion: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
} as const;

export const PROMPT_STRATEGIES = [
  { value: 'creative', label: 'Creative', description: 'For brainstorming and ideation' },
  { value: 'analytical', label: 'Analytical', description: 'For data analysis and research' },
  { value: 'technical', label: 'Technical', description: 'For code and technical documentation' },
  { value: 'conversational', label: 'Conversational', description: 'For dialogue and interaction' },
] as const;

export const VOICE_TONES = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'authoritative', label: 'Authoritative' },
  { value: 'creative', label: 'Creative' },
] as const;

export const VOICE_STYLES = [
  { value: 'concise', label: 'Concise' },
  { value: 'detailed', label: 'Detailed' },
  { value: 'conversational', label: 'Conversational' },
  { value: 'formal', label: 'Formal' },
] as const;

export const VIDEO_FORMATS = [
  { value: 'tutorial', label: 'Tutorial', description: 'Step-by-step instructional content' },
  { value: 'presentation', label: 'Presentation', description: 'Slide-based content delivery' },
  { value: 'demo', label: 'Demo', description: 'Product or feature demonstration' },
  { value: 'interview', label: 'Interview', description: 'Q&A or conversation format' },
] as const;

export const EXPERTISE_LEVELS = [
  { value: 'beginner', label: 'Beginner', description: 'New to AI prompting' },
  { value: 'intermediate', label: 'Intermediate', description: 'Some experience with prompts' },
  { value: 'advanced', label: 'Advanced', description: 'Expert prompt engineer' },
] as const;

export const ROUTES = {
  HOME: '/',
  ONBOARD: '/onboard',
  DASHBOARD: '/dashboard',
  PROJECT: '/project',
  BUILDER: '/builder',
  EXPORT: '/export',
} as const;

export const LOCAL_STORAGE_KEYS = {
  USER_PREFS: 'metaprompter-user-prefs',
  PROMPTS: 'metaprompter-prompts',
  PROJECTS: 'metaprompter-projects',
  USER: 'metaprompter-user',
} as const;