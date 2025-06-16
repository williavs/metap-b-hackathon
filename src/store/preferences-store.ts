import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserPreferences } from '@/types';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';

interface PreferencesState {
  preferences: UserPreferences;
}

interface PreferencesActions {
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  resetPreferences: () => void;
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  expertiseLevel: 'intermediate',
  autoSave: true,
  notifications: true,
};

export const usePreferencesStore = create<PreferencesState & PreferencesActions>()(
  persist(
    (set) => ({
      // State
      preferences: defaultPreferences,

      // Actions
      updatePreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),

      resetPreferences: () => set({ preferences: defaultPreferences }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.USER_PREFS,
    }
  )
);