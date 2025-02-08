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
    title: 'Naruto',
    slug: 'naruto',
    description: 'A young ninja striving to be the leader of his village.',
    genres: 'Shounen, Action, Adventure',
    release_year: 2002,
    episodes: 220,
    image: '/images/naruto.jpg'
  },
  {
    title: 'Attack on Titan',
    slug: 'attack-on-titan',
    description: 'A world where humanity battles massive Titans.',
    genres: 'Action, Mystery, Drama',
    release_year: 2013,
    episodes: 75,
    image: '/images/aot.jpg'
  },
  {
    title: 'Your Lie in April',
    slug: 'your-lie-in-april',
    description: 'A heartwarming and tragic romance about music and life.',
    genres: 'Romance, Drama, Music',
    release_year: 2014,
    episodes: 22,
    image: '/images/your-lie-in-april.jpg'
  },
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    slug: 'fullmetal-alchemist-brotherhood',
    description: 'Two brothers search for a way to restore their bodies after a failed alchemy experiment.',
    genres: 'Action, Adventure, Drama',
    release_year: 2009,
    episodes: 64,
    image: '/images/fma-brotherhood.jpg'
  },
  {
    title: 'Death Note',
    slug: 'death-note',
    description: 'A high school student gains a notebook that allows him to kill anyone.',
    genres: 'Mystery, Psychological, Supernatural',
    release_year: 2006,
    episodes: 37,
    image: '/images/death-note.jpg'
  },
  {
    title: 'One Piece',
    slug: 'one-piece',
    description: 'A boy with rubber powers seeks to become the Pirate King.',
    genres: 'Shounen, Adventure, Action',
    release_year: 1999,
    episodes: 1000,
    image: '/images/one-piece.jpg'
  },
  {
    title: 'Demon Slayer: Kimetsu no Yaiba',
    slug: 'demon-slayer',
    description: 'A boy fights demons after his family is slaughtered.',
    genres: 'Action, Historical, Supernatural',
    release_year: 2019,
    episodes: 26,
    image: '/images/demon-slayer.jpg'
  },
  {
    title: 'Steins;Gate',
    slug: 'steins-gate',
    description: 'A group of friends accidentally invent a time machine.',
    genres: 'Sci-Fi, Thriller, Drama',
    release_year: 2011,
    episodes: 24,
    image: '/images/steins-gate.jpg'
  },
  {
    title: 'Tokyo Ghoul',
    slug: 'tokyo-ghoul',
    description: 'A college student turns into a half-ghoul after a chance encounter.',
    genres: 'Horror, Action, Supernatural',
    release_year: 2014,
    episodes: 12,
    image: '/images/tokyo-ghoul.jpg'
  },
  {
    title: 'Sword Art Online',
    slug: 'sword-art-online',
    description: 'Players get trapped in a VR MMORPG.',
    genres: 'Action, Adventure, Fantasy',
    release_year: 2012,
    episodes: 25,
    image: '/images/sao.jpg'
  },
  {
    title: 'Code Geass: Lelouch of the Rebellion',
    slug: 'code-geass',
    description: 'An exiled prince gains the power to command others.',
    genres: 'Mecha, Military, Sci-Fi',
    release_year: 2006,
    episodes: 25,
    image: '/images/code-geass.jpg'
  },
  {
    title: 'Hunter x Hunter',
    slug: 'hunter-x-hunter',
    description: 'A boy sets off to find his father and become a Hunter.',
    genres: 'Shounen, Action, Adventure',
    release_year: 2011,
    episodes: 148,
    image: '/images/hunter-x-hunter.jpg'
  },
  {
    title: 'Bleach',
    slug: 'bleach',
    description: 'A teenager gains the powers of a Soul Reaper.',
    genres: 'Shounen, Action, Supernatural',
    release_year: 2004,
    episodes: 366,
    image: '/images/bleach.jpg'
  },
  {
    title: 'Re:Zero - Starting Life in Another World',
    slug: 're-zero',
    description: 'A young man is transported to a fantasy world and gains a strange power.',
    genres: 'Isekai, Fantasy, Drama',
    release_year: 2016,
    episodes: 25,
    image: '/images/re-zero.jpg'
  },
  {
    title: 'Erased',
    slug: 'erased',
    description: 'A man goes back in time to prevent a tragedy.',
    genres: 'Mystery, Psychological, Supernatural',
    release_year: 2016,
    episodes: 12,
    image: '/images/erased.jpg'
  },
  {
    title: 'My Hero Academia',
    slug: 'my-hero-academia',
    description: 'In a world of heroes, a quirkless boy dreams of becoming a hero.',
    genres: 'Shounen, Action, Superpower',
    release_year: 2016,
    episodes: 88,
    image: '/images/my-hero-academia.jpg'
  },
  {
    title: 'Fate/Zero',
    slug: 'fate-zero',
    description: 'Seven mages summon heroes from history to battle for the Holy Grail.',
    genres: 'Action, Fantasy, Supernatural',
    release_year: 2011,
    episodes: 25,
    image: '/images/fate-zero.jpg'
  },
  {
    title: 'Black Clover',
    slug: 'black-clover',
    description: 'A boy without magic seeks to become the Wizard King.',
    genres: 'Shounen, Magic, Action',
    release_year: 2017,
    episodes: 170,
    image: '/images/black-clover.jpg'
  },
  {
    title: 'Dr. Stone',
    slug: 'dr-stone',
    description: 'A genius scientist tries to rebuild civilization after everyone turns to stone.',
    genres: 'Sci-Fi, Adventure, Shounen',
    release_year: 2019,
    episodes: 24,
    image: '/images/dr-stone.jpg'
  },
  {
    title: 'The Rising of the Shield Hero',
    slug: 'shield-hero',
    description: 'A man summoned to another world must protect it with a shield.',
    genres: 'Isekai, Fantasy, Action',
    release_year: 2019,
    episodes: 25,
    image: '/images/shield-hero.jpg'
  },
  {
    title: 'Vinland Saga',
    slug: 'vinland-saga',
    description: 'A young Viking seeks revenge for his father’s death.',
    genres: 'Action, Adventure, Historical',
    release_year: 2019,
    episodes: 24,
    image: '/images/vinland-saga.jpg'
  },
  {
    title: 'Blue Exorcist',
    slug: 'blue-exorcist',
    description: 'The son of Satan trains to become an exorcist.',
    genres: 'Action, Supernatural, Fantasy',
    release_year: 2011,
    episodes: 25,
    image: '/images/blue-exorcist.jpg'
  },
  {
    title: 'No Game No Life',
    slug: 'no-game-no-life',
    description: 'Two genius siblings are transported to a world where games decide everything.',
    genres: 'Game, Fantasy, Adventure',
    release_year: 2014,
    episodes: 12,
    image: '/images/no-game-no-life.jpg'
  },
  {
    title: 'The Promised Neverland',
    slug: 'promised-neverland',
    description: 'Orphans discover a dark secret and plan their escape.',
    genres: 'Mystery, Psychological, Horror',
    release_year: 2019,
    episodes: 12,
    image: '/images/promised-neverland.jpg'
  },
  {
    title: 'Fairy Tail',
    slug: 'fairy-tail',
    description: 'A wizard guild takes on powerful missions.',
    genres: 'Shounen, Adventure, Action',
    release_year: 2009,
    episodes: 328,
    image: '/images/fairy-tail.jpg'
  },
  {
    title: 'The Seven Deadly Sins',
    slug: 'seven-deadly-sins',
    description: 'A group of knights must reunite to save their kingdom.',
    genres: 'Shounen, Fantasy, Action',
    release_year: 2014,
    episodes: 100,
    image: '/images/seven-deadly-sins.jpg'
  },
  {
    title: 'Overlord',
    slug: 'overlord',
    description: 'A player is trapped in a game world and becomes its overlord.',
    genres: 'Isekai, Action, Fantasy',
    release_year: 2015,
    episodes: 39,
    image: '/images/overlord.jpg'
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
    slug TEXT NOT NULL UNIQUE,
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
    INSERT INTO anime (title, slug, description, genres, release_year, episodes, image)
    VALUES (@title, @slug, @description, @genres, @release_year, @episodes, @image)
  `);

  for (const post of dummyPosts) {
    postStmt.run(post);
  }

  for (const anime of dummyAnime) {
    animeStmt.run(anime);
  }
}

initData();
