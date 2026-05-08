const STORAGE_KEY_PREFIX = 'dramaai_usage_';

function getTodayKey(): string {
  const today = new Date().toISOString().split('T')[0];
  return `${STORAGE_KEY_PREFIX}${today}`;
}

export function getUsageToday(): number {
  const key = getTodayKey();
  const value = localStorage.getItem(key);
  return value ? parseInt(value, 10) : 0;
}

export function incrementUsage(): void {
  const key = getTodayKey();
  const current = getUsageToday();
  localStorage.setItem(key, String(current + 1));
}

export function canGenerate(): boolean {
  return getUsageToday() < 3;
}

export function getRemainingCount(): number {
  return Math.max(0, 3 - getUsageToday());
}