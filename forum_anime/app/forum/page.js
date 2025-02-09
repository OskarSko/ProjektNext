import Link from 'next/link';
import { getAllPosts } from '@/lib/anime';
import styles from './forum.module.css';
import Header from '@/components/Header';

export default function ForumPage() {
  const posts = getAllPosts();

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Forum Posts</h1>
      <div className={styles.grid}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postAuthor}>By {post.author} - {new Date(post.created_at).toLocaleString()}</p>
            <p className={styles.postContent}>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}