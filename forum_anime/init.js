const sql = require('better-sqlite3');
const db = sql('anime_forum.db');

const dummyPosts = [
  {
    title: 'Top Mecha Anime Recommendations',
    content: 'Gundam, Code Geass, Evangelion... Which mecha anime has the best storyline and action?',
    category: 'Mecha',
    author: 'mecha_enthusiast',
    created_at: new Date().toISOString()
  },
  {
    title: 'Favorite Anime Villains',
    content: 'From Madara Uchiha to Meruem, who is the most iconic anime villain and why?',
    category: 'General',
    author: 'dark_otaku',
    created_at: new Date().toISOString()
  },
  {
    title: 'Best Slice of Life Anime',
    content: 'Barakamon, March Comes in Like a Lion, or maybe K-On!? Let’s hear your top picks.',
    category: 'Slice of Life',
    author: 'cozy_anime_fan',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime with the Best Fights',
    content: 'Epic battles like Goku vs. Jiren, Luffy vs. Kaido, and more... What’s your favorite?',
    category: 'Action',
    author: 'battle_junkie',
    created_at: new Date().toISOString()
  },
  {
    title: 'Most Overpowered Anime Characters',
    content: 'Saitama, Gojo Satoru, or maybe Ainz Ooal Gown? Let’s talk power scaling!',
    category: 'General',
    author: 'power_scaler_9000',
    created_at: new Date().toISOString()
  },
  {
    title: 'Top Psychological Thriller Anime',
    content: 'Death Note, Monster, or The Promised Neverland? What left you on the edge of your seat?',
    category: 'Thriller',
    author: 'mind_twister',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime OSTs That Hit Different',
    content: 'Soundtracks like "Attack on Titan", "Your Name", and "Cowboy Bebop"—share your top picks.',
    category: 'Music',
    author: 'music_otaku',
    created_at: new Date().toISOString()
  },
  {
    title: 'Underrated Anime Gems',
    content: 'What anime do you think deserves more love? Share your hidden favorites.',
    category: 'General',
    author: 'hidden_gem_hunter',
    created_at: new Date().toISOString()
  },
  {
    title: 'The Funniest Anime Series',
    content: 'Gintama, Konosuba, or Nichijou? What made you laugh the most?',
    category: 'Comedy',
    author: 'funny_baka',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime with the Best Opening Songs',
    content: 'Discuss openings that get you hyped, like "Unravel", "Guren no Yumiya", and more.',
    category: 'Music',
    author: 'op_fanatic',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime Movies That Made You Cry',
    content: 'Silent Voice, Grave of the Fireflies, or Your Name? Which one broke you?',
    category: 'Drama',
    author: 'tearjerker_otaku',
    created_at: new Date().toISOString()
  },
  {
    title: 'Favorite Anime Rivalries',
    content: 'Lelouch vs. Suzaku, Ash vs. Gary, or maybe Light vs. L? What’s the most iconic?',
    category: 'General',
    author: 'rivalry_watcher',
    created_at: new Date().toISOString()
  },
  {
    title: 'Fantasy Anime Recommendations',
    content: 'Overlord, Re:Zero, or Sword Art Online—what’s your go-to fantasy world?',
    category: 'Fantasy',
    author: 'isekai_fan',
    created_at: new Date().toISOString()
  },
  {
    title: 'Top 10 Sports Anime',
    content: 'Haikyuu!!, Kuroko no Basket, or Captain Tsubasa—what keeps you pumped?',
    category: 'Sports',
    author: 'sports_anime_guy',
    created_at: new Date().toISOString()
  },
  {
    title: 'Best Anime Studio in Your Opinion?',
    content: 'Madhouse, Kyoto Animation, or MAPPA? Which studio consistently delivers?',
    category: 'Industry',
    author: 'studio_buff',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime with the Most Emotional Deaths',
    content: 'We’ve all cried at some point—who hit you the hardest, Ace, Kamina, or Neji?',
    category: 'Drama',
    author: 'tragic_fan',
    created_at: new Date().toISOString()
  },
  {
    title: 'Best Isekai Anime Worlds',
    content: 'Which fantasy world would you want to be reincarnated into? Share your top choices.',
    category: 'Isekai',
    author: 'fantasy_dreamer',
    created_at: new Date().toISOString()
  },
  {
    title: 'Your Favorite Anime Couple',
    content: 'Naruto and Hinata, Inuyasha and Kagome, or Kirito and Asuna? Let’s discuss ship wars!',
    category: 'Romance',
    author: 'ship_warrior',
    created_at: new Date().toISOString()
  },
  {
    title: 'Anime Ending That Blew Your Mind',
    content: 'From Attack on Titan to Steins;Gate, which anime ending left you speechless?',
    category: 'General',
    author: 'ending_expert',
    created_at: new Date().toISOString()
  },
  {
    title: 'Best Anime Weapons and Gear',
    content: 'Zangetsu, Gunblade, or 3D Maneuver Gear? What’s your top pick for battle gear?',
    category: 'Action',
    author: 'gear_master',
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
