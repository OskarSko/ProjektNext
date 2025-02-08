import Link from 'next/link';
import { getAllAnime } from '@/lib/anime';
import styles from './anime.module.css';
import Header from '@/components/Header';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';



export default async function AnimePage({ searchParams }) {
  const searchQuery = await searchParams?.search || '';
  const animeList = getAllAnime();

  const filteredAnime = searchQuery
    ? animeList.filter((anime) =>
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : animeList;



  return (
    <div>
      <Header />
      <h1>Wyszukaj</h1>
      <SearchBar />
      <h1>Anime List</h1>
      <div className={styles.grid}>
        {animeList.map(anime => (
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

            <h2>{anime.title}</h2>
            <Link href={`/anime/${anime.slug}`}>See details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
