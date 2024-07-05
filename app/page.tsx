import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/about.module.css';
import avatar from './assets/avatar.jpg';

export default function About() {
    return (
        <section className={styles.container}>
            <div className={styles.about}>
                <Image src={avatar} alt="Profile picture" className={styles.picture} />
                <div className={styles.text}>
                    <h2 className={styles.title}>Sobre mí</h2>
                    <h5>Highly Skilled <span>Software Developer</span> &#128526;</h5>
                    <p className={styles.description}>Mario Junior Torres Perez, conocido como MarioDev64 en GitHub, es un desarrollador de la República Dominicana con más de 6 años de experiencia. Está comprometido con el aprendizaje de nuevas habilidades y la mejora de sus conocimientos actuales. Sus repositorios incluyen proyectos como una aplicación de lista de deseos, una aplicación de pronóstico del tiempo y varios proyectos de desarrollo web. Mario reside en Santo Domingo y contribuye activamente a proyectos de código abierto.</p>
                    <div className={styles.btn_group}>
                        <Link href="/contact" className={styles.hire_me}>Contrátame</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
