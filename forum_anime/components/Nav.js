import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link href="/anime">Anime</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
        <li><Link href="/forum">forum</Link></li>
      </ul>
    </nav>
  );
}