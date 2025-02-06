import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchData(fn, ...args) {
  try {
    const data = await fn(...args);
    return { data };
  } catch (error) {
    console.error('fetchData error:', error);
    return { error };
  }
}
