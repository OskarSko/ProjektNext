export default function AnimeCard({ anime }) {
    return (
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-bold">{anime.title}</h2>
        <p>{anime.description}</p>
        <p className="text-sm text-gray-600">Gatunek: {anime.genre}</p>
        <p className="text-sm text-gray-600">Platforma: {anime.platform}</p>
      </div>
    );
  }
  