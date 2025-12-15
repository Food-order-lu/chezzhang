import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import OrderWidget from '@/components/OrderWidget';
import styles from './page.module.css';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <section id="apropos" className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <h2 className={styles.sectionTitle}>
                                Chez Zhang à <span className={styles.highlight}>Bereldange</span>
                            </h2>
                            <p className={styles.aboutDescription}>
                                Bienvenue chez Chez Zhang, votre destination incontournable pour découvrir
                                la richesse et l&apos;authenticité de la gastronomie asiatique à Bereldange.
                            </p>
                            <p className={styles.aboutDescription}>
                                Chez nous, chaque plat est une invitation à voyager à travers les saveurs de l&apos;Asie,
                                avec une attention particulière portée à la fraîcheur et à la qualité des ingrédients.
                            </p>
                            <p className={styles.aboutDescription}>
                                Que vous soyez amateur de sushi, de plats à base de poisson ou que vous souhaitiez
                                explorer de nouvelles recettes, Chez Zhang vous offre une expérience culinaire unique,
                                mêlant tradition et créativité.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <img
                                src="/chezzhang/images/interior.jpg"
                                alt="Intérieur du restaurant Chez Zhang"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`${styles.servicesSection} section-dark`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitleLight}>Nos Services</h2>
                    <p className={styles.sectionSubtitle}>Flexibilité et qualité pour votre plus grand plaisir</p>

                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            icon="🍣"
                            title="Authenticité"
                            description="Des recettes traditionnelles asiatiques, préparées avec des ingrédients de la plus haute qualité."
                        />
                        <ServiceCard
                            icon="🥢"
                            title="Expérience Culinaire"
                            description="Fan de sushi, de poisson ou de spécialités asiatiques, notre menu diversifié comble toutes vos envies."
                        />
                        <ServiceCard
                            icon="🏠"
                            title="Ambiance Accueillante"
                            description="Une atmosphère chaleureuse et conviviale, parfaite pour un bon repas en famille ou entre amis."
                        />
                    </div>
                </div>
            </section>

            {/* Order Section */}
            <section id="commander" className={styles.orderSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Commander en Ligne</h2>
                    <p className={styles.orderDescription}>
                        Commandez directement en ligne pour la livraison à domicile ou le retrait au restaurant.
                        Menu complet disponible !
                    </p>
                    <div className={styles.orderButtons}>
                        <OrderWidget />
                    </div>
                </div>
            </section>

            {/* Delivery Section */}
            <section className={styles.deliverySection}>
                <div className={styles.container}>
                    <div className={styles.deliveryContent}>
                        <div className={styles.deliveryImage}>
                            <img
                                src="/chezzhang/images/sushi-boat.jpg"
                                alt="Bateau de sushi Chez Zhang"
                            />
                        </div>
                        <div className={styles.deliveryText}>
                            <h2 className={styles.sectionTitle}>Livraison Rapide et Fiable</h2>
                            <p className={styles.deliveryDescription}>
                                Chez Chez Zhang, nous savons que votre temps est précieux. C&apos;est pourquoi nous
                                offrons un service de livraison rapide et fiable, directement à votre porte.
                            </p>
                            <p className={styles.deliveryDescription}>
                                Commandez en ligne ou par téléphone, et profitez de la même qualité exceptionnelle
                                de nos plats, que ce soit au restaurant ou chez vous.
                            </p>
                            <p className={styles.deliveryDescription}>
                                Chaque commande est préparée avec soin pour vous garantir une fraîcheur et
                                un goût incomparables.
                            </p>
                            <a href="tel:+35226331710" className={styles.btnPrimary}>
                                📞 +352 26 33 17 10
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section id="specialites" className={styles.specialtiesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Nos Spécialités</h2>
                    <p className={styles.sectionSubtitleDark}>Un large choix pour ravir tous les palais</p>

                    <div className={styles.specialtiesGrid}>
                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage}>
                                <img
                                    src="/chezzhang/images/sashimi.jpg"
                                    alt="Sashimi frais"
                                />
                            </div>
                            <div className={styles.specialtyContent}>
                                <h3>Sashimi Frais</h3>
                                <p>Tranches de poisson cru de la plus haute qualité, servies avec fraîcheur et élégance.</p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage}>
                                <img
                                    src="/chezzhang/images/sushi-rolls.jpg"
                                    alt="Sushi Rolls"
                                />
                            </div>
                            <div className={styles.specialtyContent}>
                                <h3>Sushi Rolls Créatifs</h3>
                                <p>Des créations uniques alliant tradition japonaise et touches modernes innovantes.</p>
                            </div>
                        </div>

                        <div className={styles.specialtyCard}>
                            <div className={styles.specialtyImage}>
                                <img
                                    src="/chezzhang/images/temaki.jpg"
                                    alt="Temaki Hand Rolls"
                                />
                            </div>
                            <div className={styles.specialtyContent}>
                                <h3>Temaki</h3>
                                <p>Hand rolls croustillants garnis de poisson frais, avocat et ingrédients de saison.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`${styles.contactSection} section-dark`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitleLight}>Nous Contacter</h2>
                    <p className={styles.sectionSubtitle}>
                        N&apos;hésitez pas à nous contacter pour toute question ou pour réserver votre table.
                    </p>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>📞</div>
                            <h4>Téléphone</h4>
                            <a href="tel:+35226331710">+352 26 33 17 10</a>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>📍</div>
                            <h4>Adresse</h4>
                            <p>2, Rue de Bridel<br />7217 Bereldange</p>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.contactIcon}>🕐</div>
                            <h4>Horaires</h4>
                            <p>Dim-Lun, Mer-Sam<br />10:30-14:00 & 17:30-21:30</p>
                            <p className={styles.closed}>Mardi: Fermé</p>
                        </div>
                    </div>

                    <div className={styles.contactCTA}>
                        <a href="tel:+35226331710" className={styles.btnPrimaryLight}>
                            Réserver une Table
                        </a>
                        <a href="#commander" className={styles.btnOutlineLight}>
                            Voir le Menu
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
