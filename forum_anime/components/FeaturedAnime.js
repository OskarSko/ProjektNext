import AnimeCard from './AnimeCard';

export default function FeaturedAnime({ animeList }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Najpopularniejsze Anime</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
