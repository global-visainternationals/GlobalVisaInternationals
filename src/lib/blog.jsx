// src/lib/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Fetch a single post by slug
export async function getPostBySlug(slug) {
  const decodedSlug = decodeURIComponent(slug);
  let fullPath = path.join(postsDirectory, `${decodedSlug}.mdx`);

  // If .mdx doesn't exist, try .md
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post file not found: ${slug}.md or ${slug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    slug,
    contentHtml,
    faqs: data.faqs || [],
  };
}

// Fetch all posts for static generation
export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      return {
        ...data,
        slug,
        contentHtml,
        faqs: data.faqs || [],
      };
    })
  );
}
