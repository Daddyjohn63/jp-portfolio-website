import { CACHE_TAG_BLOG_POSTS } from '@/lib/blog';
import { CACHE_TAG_PROCESS_FLOW } from '@/lib/single-types';
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  try {
    const payload = await request.json();

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

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Webhook error', { status: 500 });
  }
}
