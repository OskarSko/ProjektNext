import { getAnimeBySlug, getAllAnime } from '@/lib/anime';

export async function generateStaticParams() {
  const animeList = getAllAnime();

  return animeList.map((anime) => ({
    slug: anime.slug,
  }));
}

export default async function AnimeDetailsPage({ params }) {
  const anime = await getAnimeBySlug(params.slug);

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
