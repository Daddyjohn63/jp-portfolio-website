import { CACHE_TAG_BLOG_POSTS } from '@/lib/blog';
import { revalidateTag } from 'next/cache';

export async function POST(request) {
  try {
    const payload = await request.json();
    if (payload.model === 'post' || payload.model === 'category') {
      await revalidateTag(CACHE_TAG_BLOG_POSTS);
      console.log('Revalidated tag:', CACHE_TAG_BLOG_POSTS);
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Webhook error', { status: 500 });
  }
}
