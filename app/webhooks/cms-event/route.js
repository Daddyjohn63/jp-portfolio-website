import { CACHE_TAG_BLOG_POSTS } from '@/lib/blog';
import { CACHE_TAG_PROCESS_FLOW } from '@/lib/single-types';
import { CACHE_TAG_PROJECTS } from '@/lib/projects';
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  try {
    const payload = await request.json();

    // Handle entry changes
    if (payload.event.includes('entry')) {
      // Handle blog posts and categories
      if (payload.model === 'post' || payload.model === 'category') {
        await revalidateTag(CACHE_TAG_BLOG_POSTS);
        console.log('Revalidated tag:', CACHE_TAG_BLOG_POSTS);
      }

      // Handle process flow single type
      if (payload.model === 'process-flow') {
        await revalidateTag(CACHE_TAG_PROCESS_FLOW);
        console.log('Revalidated tag:', CACHE_TAG_PROCESS_FLOW);
      }

      // Handle work/projects content type
      if (payload.model === 'work') {
        await revalidateTag(CACHE_TAG_PROJECTS);
        console.log('Revalidated tag:', CACHE_TAG_PROJECTS);
      }
    }

    // Handle media changes
    if (payload.event.includes('media')) {
      // For work-related media changes
      if (payload.model === 'work') {
        await revalidateTag(CACHE_TAG_PROJECTS);
        console.log('Revalidated projects tag due to work media change');
      } else {
        // For other media changes, revalidate all
        await revalidateTag(CACHE_TAG_BLOG_POSTS);
        await revalidateTag(CACHE_TAG_PROCESS_FLOW);
        await revalidateTag(CACHE_TAG_PROJECTS);
        console.log('Revalidated all tags due to media change');
      }
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Webhook error', { status: 500 });
  }
}
