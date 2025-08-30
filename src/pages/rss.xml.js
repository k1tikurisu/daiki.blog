import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return data.draft !== true;
  });

  const sortedPosts = posts.sort((a, b) => {
    return b.data.date.valueOf() - a.data.date.valueOf();
  });

  return rss({
    title: 'daiki.blog',
    description: 'A simple blog',
    site: context.site || 'https://daiki.blog',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.data.title,
      link: `/posts/${post.id}/`,
    })),
  });
}