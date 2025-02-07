import sql from 'better-sqlite3';

const db = sql('anime_forum.db');

export function getAllAnime() {
  return db.prepare('SELECT * FROM anime ORDER BY release_year DESC').all();
}

export function getAnimeById(id) {
  return db.prepare('SELECT * FROM anime WHERE id = ?').get(id);
}