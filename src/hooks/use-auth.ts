import { useUserStore } from '@/store';

/**
 * Authentication hook for route guards
 */
export function useAuth() {
  const { user, isLoading, setUser, clearUser } = useUserStore();

  const isAuthenticated = !!user;

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    clearUser();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}