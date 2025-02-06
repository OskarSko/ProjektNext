import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link href="/anime">Anime</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
        <li><Link href="/posts">Posty</Link></li>
      </ul>
    </nav>
  );
}