import styles from './Home.module.css'; 
import Link from 'next/link';
import Image from 'next/image';

export default function RandomAnimeSection({ animeList }) {
  const randomAnime = [...animeList].sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className={styles.randomAnimeSection}>
      <h2 className={styles.sectionTitle}>Losowe anime</h2>
      <div className={styles.animeGrid}>
        {randomAnime.map(anime => (
          <div key={anime.id} className={styles.animeCard}>
            <Link href={`/anime/${anime.slug}`}>
              <Image 
                src={anime.image} 
                alt={anime.title} 
                width={300} 
                height={450} 
                className={styles.animeImage} 
              />
            </Link>
            <h3 className={styles.animeTitle}>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
