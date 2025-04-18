import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList';
import Head from 'next/head'; // Import Head from next/head

export default async function BlogPage() {
  const posts = await getAllPosts();

  const pageTitle = "Blog - Global Visa Internationals";
  const pageDescription = "Explore insightful articles and updates on visas, immigration services, and more at Global Visa Internationals.";

  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globalvisa-internationals.com/blog" />
        <meta property="og:image" content="https://www.globalvisa-internationals.com/images" />
        <meta property="og:image:alt" content="Blog on Global Visa Internationals" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.globalvisa-internationals.com/images" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Render Blog List */}
      <BlogList posts={posts} />
    </>
  );
}
