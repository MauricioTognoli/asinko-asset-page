import type { Comment } from "@/types/asset";

function storageKey(contentId: string) {
  return `asinko-comments-${contentId}`;
}

export function readStoredComments(contentId: string): Comment[] {
  try {
    const raw = localStorage.getItem(storageKey(contentId));
    return raw ? (JSON.parse(raw) as Comment[]) : [];
  } catch {
    return [];
  }
}

export function writeStoredComments(contentId: string, comments: Comment[]) {
  try {
    localStorage.setItem(storageKey(contentId), JSON.stringify(comments));
  } catch {}
}
