import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Prompt } from '@/types';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';
import { generateId } from '@/lib/utils';

interface PromptsState {
  prompts: Record<string, Prompt>;
  isLoading: boolean;
  error: string | null;
}

interface PromptsActions {
  addPrompt: (prompt: Omit<Prompt, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updatePrompt: (id: string, updates: Partial<Prompt>) => void;
  deletePrompt: (id: string) => void;
  getPrompt: (id: string) => Prompt | undefined;
  getAllPrompts: () => Prompt[];
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearPrompts: () => void;
}

export const usePromptsStore = create<PromptsState & PromptsActions>()(
  persist(
    (set, get) => ({
      // State
      prompts: {},
      isLoading: false,
      error: null,

      // Actions
      addPrompt: (promptData) => {
        const id = generateId();
        const now = new Date();
        const prompt: Prompt = {
          ...promptData,
          id,
          createdAt: now,
          updatedAt: now,
        };
        
        set((state) => ({
          prompts: { ...state.prompts, [id]: prompt },
          error: null,
        }));
        
        return id;
      },

      updatePrompt: (id, updates) => {
        set((state) => {
          const existingPrompt = state.prompts[id];
          if (!existingPrompt) return state;

          return {
            prompts: {
              ...state.prompts,
              [id]: {
                ...existingPrompt,
                ...updates,
                updatedAt: new Date(),
              },
            },
            error: null,
          };
        });
      },

      deletePrompt: (id) => {
        set((state) => {
          const { [id]: deleted, ...remaining } = state.prompts;
          return { prompts: remaining, error: null };
        });
      },

      getPrompt: (id) => get().prompts[id],

      getAllPrompts: () => Object.values(get().prompts),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      clearPrompts: () => set({ prompts: {}, error: null }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.PROMPTS,
      partialize: (state) => ({ prompts: state.prompts }),
    }
  )
);