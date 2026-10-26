import type { Story } from "../illustrations/types";

const NARRATION_WORDS_PER_MINUTE = 120;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function estimateDurationMinutes(story: Story): number {
  const totalWords = story.scenes.reduce((sum, scene) => sum + countWords(scene.text), 0);
  return Math.max(1, Math.round(totalWords / NARRATION_WORDS_PER_MINUTE));
}

export function totalWordCount(story: Story): number {
  return story.scenes.reduce((sum, scene) => sum + countWords(scene.text), 0);
}
