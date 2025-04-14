'use client';
import styles from './blog.module.css';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { formatDate } from "@/utils/formatDate";
import { motion } from "framer-motion";

const categories = ["Study", "Visit", "Work"];

export default function BlogList({ posts }) {
  const [filteredCategory, setFilteredCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category === filteredCategory ? null : category);
  };

  const filteredPosts = filteredCategory
    ? posts.filter(post => post.category === filteredCategory)
    : posts;

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {filteredPosts.map((post, index) => (
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
          <h2>Popular Category</h2>
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                style={{
                  fontWeight: filteredCategory === cat ? 'bold' : 'normal',
                  textDecoration: filteredCategory === cat ? 'underline' : 'none',
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Pagination UI (non-functional yet) */}
      <div className={styles.pagination}>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
      </div>
    </div>
  );
}
