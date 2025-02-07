import Link from 'next/link';
import { getAllAnime } from '@/lib/anime';
import styles from './anime.module.css';

export default function AnimePage() {
  const animeList = getAllAnime();

  return (
    <div>
      <h1>Anime List</h1>
      <div className={styles.grid}>
        {animeList.map(anime => (
          <div key={anime.id} className={styles.animeCard}>
            <img src={anime.image} alt={anime.title} />
            <h2>{anime.title}</h2>
            <p><strong>Genres:</strong> {anime.genres}</p>
            <p><strong>Episodes:</strong> {anime.episodes}</p>
            <Link href={`/anime/${anime.slug}`}>See details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
