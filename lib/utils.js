import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchData(fetchFn, ...args) {
  try {
    const data = await fetchFn(...args);
    return {
      data,
      error: null
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Let Next.js error boundary handle it
  }
}
