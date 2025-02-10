import styles from './Home.module.css'; 

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Witamy na stronie AnimeHub!</h1>
      <p className={styles.heroText}>
        Odkrywaj świat anime, znajdź ulubione tytuły i dyskutuj z innymi fanami na naszym forum. Czekają na Ciebie setki niesamowitych przygód!
      </p>
    </div>
  );
}
