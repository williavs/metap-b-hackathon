import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface UserActions {
  setUser: (user: User | null) => void;
  updateUser: (userData: Partial<User>) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) => set({ user, error: null }),
      
      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              ...userData,
              updatedAt: new Date(),
            },
            error: null,
          });
        }
      },

      clearUser: () => set({ user: null, error: null }),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      setError: (error) => set({ error, isLoading: false }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.USER,
      partialize: (state) => ({ user: state.user }),
    }
  )
);