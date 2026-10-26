import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Story } from "../illustrations/types";
import CATALOG from "../data/stories";
import {
  DEFAULT_SETTINGS,
  getCustomStories,
  getFavorites,
  getProgressMap,
  getSettings,
  saveCustomStory as persistCustomStory,
  saveSettings as persistSettings,
  clearProgress as persistClearProgress,
  deleteCustomStory as persistDeleteCustomStory,
  saveProgress as persistProgress,
  toggleFavorite as persistToggleFavorite,
  eraseAllData,
  type Progress,
  type Settings,
} from "../lib/storage";

interface AppDataValue {
  catalog: Story[];
  customStories: Story[];
  allStories: Story[];
  favorites: string[];
  progress: Record<string, Progress>;
  settings: Settings;
  isFavorite: (storyId: string) => boolean;
  toggleFavorite: (storyId: string) => void;
  getProgress: (storyId: string) => Progress | undefined;
  updateProgress: (storyId: string, sceneIndex: number, completed: boolean) => void;
  resetProgress: (storyId: string) => void;
  updateSettings: (settings: Settings) => void;
  addCustomStory: (story: Story) => void;
  removeCustomStory: (storyId: string) => void;
  wipeAllData: () => void;
  findStory: (storyId: string) => Story | undefined;
}

const AppDataContext = createContext<AppDataValue | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());
  const [progress, setProgress] = useState<Record<string, Progress>>(() => getProgressMap());
  const [settings, setSettings] = useState<Settings>(() => getSettings());
  const [customStories, setCustomStories] = useState<Story[]>(() => getCustomStories());

  const toggleFavorite = useCallback((storyId: string) => {
    setFavorites(persistToggleFavorite(storyId));
  }, []);

  const updateProgress = useCallback((storyId: string, sceneIndex: number, completed: boolean) => {
    persistProgress(storyId, sceneIndex, completed);
    setProgress(getProgressMap());
  }, []);

  const resetProgress = useCallback((storyId: string) => {
    persistClearProgress(storyId);
    setProgress(getProgressMap());
  }, []);

  const updateSettings = useCallback((next: Settings) => {
    persistSettings(next);
    setSettings(next);
  }, []);

  const addCustomStory = useCallback((story: Story) => {
    persistCustomStory(story);
    setCustomStories(getCustomStories());
  }, []);

  const removeCustomStory = useCallback((storyId: string) => {
    persistDeleteCustomStory(storyId);
    setCustomStories(getCustomStories());
  }, []);

  const wipeAllData = useCallback(() => {
    eraseAllData();
    setFavorites([]);
    setProgress({});
    setSettings(DEFAULT_SETTINGS);
    setCustomStories([]);
  }, []);

  const allStories = useMemo(() => [...CATALOG, ...customStories], [customStories]);

  const findStory = useCallback(
    (storyId: string) => allStories.find((s) => s.id === storyId),
    [allStories],
  );

  const value: AppDataValue = {
    catalog: CATALOG,
    customStories,
    allStories,
    favorites,
    progress,
    settings,
    isFavorite: (storyId) => favorites.includes(storyId),
    toggleFavorite,
    getProgress: (storyId) => progress[storyId],
    updateProgress,
    resetProgress,
    updateSettings,
    addCustomStory,
    removeCustomStory,
    wipeAllData,
    findStory,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData deve ser usado dentro de AppDataProvider");
  return ctx;
}
