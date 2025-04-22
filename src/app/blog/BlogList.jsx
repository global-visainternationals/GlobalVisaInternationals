'use client';
import styles from './blog.module.css';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Study", "Visit", "Work", "Events", "PR-Visa", "Travel", "VFS Global"];
const POSTS_PER_PAGE = 9;

export default function BlogList({ posts }) {
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts =
    filteredCategory === "All"
      ? posts
      : posts.filter((post) => post.category === filteredCategory);

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
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                {post.image && (
                  <div
                    style={{
                      width: '100%',
                      position: 'relative',
                      aspectRatio: '16 / 9',
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'contain', borderRadius: '10px' }}
                    />
                  </div>
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
            </motion.article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2>Popular Categories</h2>
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li
                key={cat}
                className={
                  filteredCategory === cat
                    ? `${styles.activeCategory}`
                    : ''
                }
                onClick={() => handleCategoryFilter(cat)}
                role="button"
                aria-pressed={filteredCategory === cat}
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

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={
                currentPage === i + 1 ? styles.activePage : ''
              }
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

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
