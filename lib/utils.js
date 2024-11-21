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

//testing error state
// export function withTestingDelay(fn, delay = 2000) {
//   return async (...args) => {
//     await new Promise(resolve => setTimeout(resolve, delay));
//     return fn(...args);
//   };
// }

// export function withTestingError(fn, errorRate = 0.5) {
//   return async (...args) => {
//     if (Math.random() < errorRate) {
//       throw new Error('Simulated error for testing');
//     }
//     return fn(...args);
//   };
// }
