import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Project, ChecklistItem } from '@/types';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';
import { generateId } from '@/lib/utils';

interface ProjectsState {
  projects: Record<string, Project>;
  isLoading: boolean;
  error: string | null;
}

interface ProjectsActions {
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
  getAllProjects: () => Project[];
  updateChecklist: (projectId: string, checklist: ChecklistItem[]) => void;
  toggleChecklistItem: (projectId: string, itemId: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearProjects: () => void;
}

export const useProjectsStore = create<ProjectsState & ProjectsActions>()(
  persist(
    (set, get) => ({
      // State
      projects: {},
      isLoading: false,
      error: null,

      // Actions
      addProject: (projectData) => {
        const id = generateId();
        const now = new Date();
        const project: Project = {
          ...projectData,
          id,
          createdAt: now,
          updatedAt: now,
        };
        
        set((state) => ({
          projects: { ...state.projects, [id]: project },
          error: null,
        }));
        
        return id;
      },

      updateProject: (id, updates) => {
        set((state) => {
          const existingProject = state.projects[id];
          if (!existingProject) return state;

          return {
            projects: {
              ...state.projects,
              [id]: {
                ...existingProject,
                ...updates,
                updatedAt: new Date(),
              },
            },
            error: null,
          };
        });
      },

      deleteProject: (id) => {
        set((state) => {
          const { [id]: deleted, ...remaining } = state.projects;
          return { projects: remaining, error: null };
        });
      },

      getProject: (id) => get().projects[id],

      getAllProjects: () => Object.values(get().projects),

      updateChecklist: (projectId, checklist) => {
        get().updateProject(projectId, { checklist });
      },

      toggleChecklistItem: (projectId, itemId) => {
        const project = get().projects[projectId];
        if (!project) return;

        const updatedChecklist = project.checklist.map((item) =>
          item.id === itemId ? { ...item, completed: !item.completed } : item
        );

        get().updateProject(projectId, { checklist: updatedChecklist });
      },

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error, isLoading: false }),

      clearProjects: () => set({ projects: {}, error: null }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.PROJECTS,
      partialize: (state) => ({ projects: state.projects }),
    }
  )
);