import { getAnimeById } from '@/lib/anime';

export default function AnimeDetailsPage({ params }) {
  const anime = getAnimeById(params.id);

  if (!anime) {
    return <h1>Anime not found</h1>;
  }

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image} alt={anime.title} />
      <p><strong>Description:</strong> {anime.description}</p>
      <p><strong>Genres:</strong> {anime.genres}</p>
      <p><strong>Release Year:</strong> {anime.release_year}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
    </div>
  );
}
