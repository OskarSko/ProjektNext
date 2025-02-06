import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FeaturedAnime from '@/components/FeaturedAnime';

export default function Home() {
  const animeList = [
    {
      id: 1,
      title: 'Attack on Titan',
      description: 'Historia o walce ludzkości z Tytanami...',
      genre: 'Akcja',
      platform: 'Crunchyroll',
    },
    {
      id: 2,
      title: 'Demon Slayer',
      description: 'Walka z demonami w świecie fantasy.',
      genre: 'Fantasy',
      platform: 'Netflix',
    },
    {
      id: 3,
      title: 'One Piece',
      description: 'Luffy wyrusza w podróż po Grand Line.',
      genre: 'Przygodowe',
      platform: 'Funimation',
    },
  ];

  return (
    <div>
      <Header />
      <div className="p-4">
        <SearchBar placeholder="Wyszukaj anime lub wątki..." />
        <FeaturedAnime animeList={animeList} />
      </div>
    </div>
  );
}
