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
    // 'Strapi-Response-Format': 'v4' // Add this for Strapi 5 compatibility
  };
}

/**
 * Wraps an async function call with error handling
 * @template T
 * @param {Function} fn - The async function to call
 * @param {...any} args - Arguments to pass to the function
 * @returns {Promise<{data: T}|{error: Error}>} - Response wrapped in a data property
 */
export async function fetchData(fn, ...args) {
  try {
    const data = await fn(...args);
    // console.log('DATA from fetchData', data);
    return { data }; // Always wraps response in a data property
  } catch (error) {
    console.error('fetchData error:', error);
    return { error };
  }
}
