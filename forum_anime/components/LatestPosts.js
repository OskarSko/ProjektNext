import styles from './Home.module.css';
import sqlite3 from 'better-sqlite3';

export default async function LatestPosts() {
  // Połączenie z bazą danych
  const db = sqlite3('anime_forum.db');
  
  // Pobranie 3 najnowszych postów
  const posts = db.prepare('SELECT * FROM posts ORDER BY created_at DESC LIMIT 3').all();

  return (
    <div className={styles.latestPosts}>
      <h2 className={styles.sectionTitle}>Najnowsze posty na forum</h2>
      {posts.length > 0 ? (
        <ul className={styles.postsList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postContent}>{post.content.substring(0, 100)}...</p>
              <p className={styles.postMeta}>
                Kategoria: {post.category} | Autor: {post.author} | {new Date(post.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noPostsMessage}>
          Brak postów do wyświetlenia. Sprawdź ponownie później!
        </p>
      )}
    </div>
  );
}
