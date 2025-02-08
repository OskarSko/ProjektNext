import styles from './Home.module.css'; 

export default function LatestPosts() {
  return (
    <div className={styles.latestPosts}>
      <h2 className={styles.sectionTitle}>Najnowsze posty na forum</h2>
      <p className={styles.latestPostsText}>
        Wkrótce zobaczysz tu najnowsze posty z naszego forum. Pracujemy nad tym!
      </p>
    </div>
  );
}
