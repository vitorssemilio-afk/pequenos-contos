import type { Story } from "../illustrations/types";

const KEYS = {
  favorites: "pc:favorites",
  progress: "pc:progress",
  settings: "pc:settings",
  pin: "pc:pin",
  customStories: "pc:customStories",
} as const;

export interface Progress {
  sceneIndex: number;
  updatedAt: number;
  completed: boolean;
}

export interface Settings {
  childAge: 2 | 3 | 4 | 5;
  audioEnabled: boolean;
  soundEffectsEnabled: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  childAge: 3,
  audioEnabled: true,
  soundEffectsEnabled: true,
};

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // armazenamento indisponível (ex: navegação privada) — a app continua funcionando sem persistir
  }
}

export function getFavorites(): string[] {
  return safeGet<string[]>(KEYS.favorites, []);
}

export function toggleFavorite(storyId: string): string[] {
  const current = getFavorites();
  const next = current.includes(storyId)
    ? current.filter((id) => id !== storyId)
    : [...current, storyId];
  safeSet(KEYS.favorites, next);
  return next;
}

export function getProgressMap(): Record<string, Progress> {
  return safeGet<Record<string, Progress>>(KEYS.progress, {});
}

export function saveProgress(storyId: string, sceneIndex: number, completed: boolean) {
  const map = getProgressMap();
  map[storyId] = { sceneIndex, updatedAt: Date.now(), completed };
  safeSet(KEYS.progress, map);
}

export function clearProgress(storyId: string) {
  const map = getProgressMap();
  delete map[storyId];
  safeSet(KEYS.progress, map);
}

export function getSettings(): Settings {
  return { ...DEFAULT_SETTINGS, ...safeGet<Partial<Settings>>(KEYS.settings, {}) };
}

export function saveSettings(settings: Settings) {
  safeSet(KEYS.settings, settings);
}

export function getPinHash(): string | null {
  return safeGet<string | null>(KEYS.pin, null);
}

export async function hashPin(pin: string): Promise<string> {
  const data = new TextEncoder().encode(`pequenos-contos:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function savePinHash(hash: string) {
  safeSet(KEYS.pin, hash);
}

export function getCustomStories(): Story[] {
  return safeGet<Story[]>(KEYS.customStories, []);
}

export function saveCustomStory(story: Story) {
  const list = getCustomStories();
  safeSet(KEYS.customStories, [...list, story]);
}

export function deleteCustomStory(storyId: string) {
  const list = getCustomStories().filter((s) => s.id !== storyId);
  safeSet(KEYS.customStories, list);
}

export function eraseAllData() {
  Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
}
