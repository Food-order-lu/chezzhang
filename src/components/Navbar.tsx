'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <img
                        src="/chezzhang/images/logo.png"
                        alt="Chez Zhang"
                        className={styles.logoImage}
                    />
                </a>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <a href="#accueil" className={styles.navLink} onClick={handleNavClick}>Accueil</a>
                    <a href="#apropos" className={styles.navLink} onClick={handleNavClick}>À Propos</a>
                    <a href="#services" className={styles.navLink} onClick={handleNavClick}>Services</a>
                    <a href="#specialites" className={styles.navLink} onClick={handleNavClick}>Spécialités</a>
                    <a href="#contact" className={styles.navLink} onClick={handleNavClick}>Contact</a>
                </div>

                <div className={styles.ctaButtons}>
                    <a href="tel:+35226331710" className={styles.btnSecondary}>
                        Réserver
                    </a>
                    <a href="#commander" className={styles.btnPrimary}>
                        Commander
                    </a>
                </div>

                <button
                    className={styles.mobileMenuToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </button>
            </div>
        </nav>
    );
}
