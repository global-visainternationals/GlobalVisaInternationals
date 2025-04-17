// src/app/blog/[slug]/page.jsx
// src/app/blog/[slug]/page.jsx
import Head from 'next/head'; // Add this import
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }) {
  if (!params || !params.slug) return notFound();

  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const fullImageUrl = `https://www.globalvisa-internationals.com${post.image}`;
  const fullPostUrl = `https://www.globalvisa-internationals.com/blog/${post.slug}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={fullPostUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Head>

      <main style={{ maxWidth: '768px', margin: 'auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', paddingTop: '2rem' }}>
          {post.title}
        </h1>
        <p style={{ color: 'gray', marginTop: '0.5rem' }}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })} • {post.author}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '450px',
              objectFit: 'contain',
              borderRadius: '10px',
              marginTop: '2rem',
              display: 'block',
            }}
          />
        )}

        <article
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          style={{ marginTop: '2rem', lineHeight: '1.75', fontSize: '1.1rem' }}
        />
      </main>
    </>
  );
}
