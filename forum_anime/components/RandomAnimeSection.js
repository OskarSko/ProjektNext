'use client'; // To sprawia, że komponent działa po stronie klienta

import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function RandomAnimeSection({ animeList }) {
  const [randomAnime, setRandomAnime] = useState([]);

  useEffect(() => {
    // Losowanie 6 anime za każdym razem, gdy komponent jest montowany
    const shuffledAnime = [...animeList].sort(() => 0.5 - Math.random()).slice(0, 6);
    setRandomAnime(shuffledAnime);
  }, [animeList]);

  return (
    <div className={styles.randomAnimeSection}>
      <h2 className={styles.sectionTitle}>Losowe anime</h2>
      <div className={styles.animeGrid}>
        {randomAnime.map(anime => (
          <div key={anime.id} className={styles.animeCard}>
            <Link href={`/anime/${anime.slug}`}>
              <Image 
                src={anime.image.startsWith('/images') ? anime.image : `/images${anime.image}`} 
                alt={anime.title} 
                width={300} 
                height={450} 
                className={styles.animeImage} 
                priority={true}
              />
            </Link>
            <h3 className={styles.animeTitle}>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
