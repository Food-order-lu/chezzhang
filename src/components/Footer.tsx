import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <img
                            src="/chezzhang/images/logo.png"
                            alt="Chez Zhang"
                            className={styles.footerLogo}
                        />
                        <p className={styles.footerText}>
                            Restaurant asiatique à Bereldange, Luxembourg.
                            Cuisine authentique et sushis frais depuis toujours.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.sectionTitle}>Contact</h4>
                        <div className={styles.contactInfo}>
                            <p>📞 <a href="tel:+35226331710">+352 26 33 17 10</a></p>
                            <p>📍 2, Rue de Bridel<br />7217 Bereldange</p>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.sectionTitle}>Horaires</h4>
                        <p className={styles.hours}>Dimanche - Lundi</p>
                        <p className={styles.hours}>10:30-14:00 & 17:30-21:30</p>
                        <p className={`${styles.hours} ${styles.closed}`}>Mardi: Fermé</p>
                        <p className={styles.hours}>Mercredi - Samedi</p>
                        <p className={styles.hours}>10:30-14:00 & 17:30-21:30</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.sectionTitle}>Navigation</h4>
                        <nav className={styles.footerNav}>
                            <a href="#accueil">Accueil</a>
                            <a href="#apropos">À Propos</a>
                            <a href="#services">Services</a>
                            <a href="#specialites">Spécialités</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} Chez Zhang. Tous droits réservés.</p>
                    <p className={styles.websiteLink}>
                        Site web: <a href="https://www.chezzhang.lu">www.chezzhang.lu</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
