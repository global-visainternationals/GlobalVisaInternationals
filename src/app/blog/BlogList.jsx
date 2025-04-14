'use client';
import styles from './blog.module.css';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Study", "Visit", "Work"];
const POSTS_PER_PAGE = 9;

export default function BlogList({ posts }) {
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category === filteredCategory ? null : category);
    setCurrentPage(1); // reset to page 1 when category changes
  };

  const filteredPosts = filteredCategory
    ? posts.filter((post) => post.category === filteredCategory)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                  />
                )}
              </Link>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <div className={styles.cardMeta}>
                  <span>👤 {post.author}</span>
                  <span>
                    📅 {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  READ MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2>Popular Categories</h2>
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                style={{
                  fontWeight: filteredCategory === cat ? 'bold' : 'normal',
                  textDecoration: filteredCategory === cat ? 'underline' : 'none',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>Page {currentPage} of {totalPages}</span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
