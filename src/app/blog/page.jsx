// src/app/blog/page.jsx
import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList'; // Ensure this path is correct

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogList posts={posts} />;
}
