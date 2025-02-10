import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Updated utility function for headers
export function getPublicHeaders() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    //'Strapi-Response-Format': 'v4' // Add this for Strapi 5 compatibility
  };
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
