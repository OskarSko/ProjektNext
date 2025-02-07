const sql = require('better-sqlite3');
const db = sql('anime_forum.db');

const dummyPosts = [
  {
    title: 'Best Shounen Anime of All Time',
    content: 'Naruto, One Piece, Bleach, and more... What are your favorites and why?',
    category: 'Shounen',
    author: 'anime_fan_123',
    created_at: new Date().toISOString()
  },
  {
    title: 'Most Heartbreaking Romance Scenes',
    content: 'From "Your Lie in April" to "Clannad", let’s discuss the most emotional moments.',
    category: 'Romance',
    author: 'romantic_otaku',
    created_at: new Date().toISOString()
  }
];

const dummyAnime = [
  {
    id: 1,
    title: 'Naruto',
    description: 'A young ninja striving to be the leader of his village.',
    genres: 'Shounen, Action, Adventure',
    release_year: 2002,
    episodes: 220,
    image: '/images/naruto.jpg'
  },
  {
    id: 2,
    title: 'Attack on Titan',
    description: 'A world where humanity battles massive Titans.',
    genres: 'Action, Mystery, Drama',
    release_year: 2013,
    episodes: 75,
    image: '/images/aot.jpg'
  },
  {
    id: 3,
    title: 'Your Lie in April',
    description: 'A heartwarming and tragic romance about music and life.',
    genres: 'Romance, Drama, Music',
    release_year: 2014,
    episodes: 22,
    image: '/images/your-lie-in-april.jpg'
  }
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at TEXT NOT NULL
  )
`).run();


db.prepare(`
  CREATE TABLE IF NOT EXISTS anime (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    genres TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    episodes INTEGER NOT NULL,
    image TEXT NOT NULL
  )
`).run();


function initData() {
  const postStmt = db.prepare(`
    INSERT INTO posts (title, content, category, author, created_at)
    VALUES (@title, @content, @category, @author, @created_at)
  `);

  const animeStmt = db.prepare(`
    INSERT INTO anime (title, description, genres, release_year, episodes, image)
    VALUES (@title, @description, @genres, @release_year, @episodes, @image)
  `);

  for (const post of dummyPosts) {
    postStmt.run(post);
  }

  for (const anime of dummyAnime) {
    animeStmt.run(anime);
  }
}

initData();
