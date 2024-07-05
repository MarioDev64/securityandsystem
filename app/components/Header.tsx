"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import avatar from '../assets/avatar.jpg'
import styles from '../styles/Header.module.css';

export default function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <nav>
                    <a href="/" className={`${pathname === '/' ? styles.active : ''} ${styles.navLink} ${styles.navLinkGrowUp}`}>Sobre mí</a>
                    <a href="/interests" className={`${pathname === '/interests' ? styles.active : ''} ${styles.navLink} ${styles.navLinkGrowUp}`}>Intereses</a>
                    <a href="/contact" className={`${pathname === '/contact' ? styles.active : ''} ${styles.navLink} ${styles.navLinkGrowUp}`}>Contacto</a>
                </nav>
            </div>
            <div className={styles.right}>
                <Image src={avatar} width={65} height={65} alt="Avatar" className={styles.avatar} />
            </div>
        </header>
    );
}
