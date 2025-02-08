import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RandomAnimeSection from '@/components/RandomAnimeSection';
import LatestPosts from '@/components/LatestPosts';
import { getAllAnime } from '@/lib/anime';

export default function Home() {
  const animeList = getAllAnime();

  return (
    <div>
      <Header />
      <div className="p-6">
        <HeroSection />
        <RandomAnimeSection animeList={animeList} />
        <LatestPosts />
      </div>
    </div>
  );
}
