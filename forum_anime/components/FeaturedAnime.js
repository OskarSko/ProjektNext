import AnimeCard from './AnimeCard';

export default function FeaturedAnime({ animeList }) {
  return (
    <div className="featured-anime">
      <h2>Najpopularniejsze Anime</h2>
      <div className="grid">
        {animeList.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}