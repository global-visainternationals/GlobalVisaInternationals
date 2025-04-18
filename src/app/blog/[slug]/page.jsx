import { getPostBySlug, getAllPosts } from '@/lib/blog'; // Ensure both functions are imported
import { notFound } from 'next/navigation';

// 1. Generate metadata dynamically (SEO and social sharing)
export async function generateMetadata({ params }) {
  // Await params properly
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const fullImageUrl = `https://www.globalvisa-internationals.com${post.image}`;
  const fullPostUrl = `https://www.globalvisa-internationals.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: fullPostUrl,
      type: 'article',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [fullImageUrl],
    },
  };
}

// 2. Fetch and render the blog post content
export default async function BlogPostPage({ params }) {
  // Await params to make sure the async function is handled properly
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
  );
}

// 3. Optionally, generate static paths for SSG if needed
export async function generateStaticParams() {
  // Ensure getAllPosts is defined in the right scope
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
