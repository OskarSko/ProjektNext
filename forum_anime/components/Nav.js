import Link from 'next/link';
import styles from './Nav.module.css'; // Upewnij się, że plik CSS jest poprawny

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">AnimeHub</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/anime">Anime</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
          <li><Link href="/forum">Forum</Link></li>
        </ul>
      </nav>
    </header>
  );
}
