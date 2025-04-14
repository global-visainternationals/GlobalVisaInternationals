// src/app/blog/[slug]/page.jsx
// src/app/blog/[slug]/page.jsx
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPostPage(props) {
  const { params } = props;
  if (!params || !params.slug) return notFound();

  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
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
            height: 'auto',          // Allow image to scale proportionally
            maxHeight: '450px',      // Optional: limit height if needed
            objectFit: 'contain',    // Ensures entire image fits inside the container
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
  );
}
