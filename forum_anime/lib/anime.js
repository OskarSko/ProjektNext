import sql from 'better-sqlite3';

const db = sql('anime_forum.db');

export function getAllAnime() {
  return db.prepare('SELECT * FROM anime ORDER BY release_year DESC').all();
}

export function getAnimeBySlug(slug) {
  return db.prepare('SELECT * FROM anime WHERE slug = ?').get(slug);
}

export function getAnimeById(id) {
  return db.prepare('SELECT * FROM anime WHERE id = ?').get(id);
}

export function getAllPosts() {
  const posts = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
  return posts;
}