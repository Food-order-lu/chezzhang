import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="accueil" className={styles.hero}>
            <div className={styles.heroBackground}></div>
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        Bienvenue
                        <span className={styles.highlight}>Chez Zhang</span>
                    </h1>
                    <p className={styles.heroSubtitle}>Restaurant Asiatique à Bereldange</p>
                    <p className={styles.heroDescription}>
                        Découvrez la richesse et l&apos;authenticité de la gastronomie asiatique.
                        Sushis frais, sashimis délicats et spécialités traditionnelles vous attendent.
                    </p>
                    <div className={styles.heroCTA}>
                        <a href="#commander" className={styles.btnPrimary}>
                            Commander en Ligne
                        </a>
                        <a href="#specialites" className={styles.btnOutline}>
                            Nos Spécialités
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
