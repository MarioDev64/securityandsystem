import styles from '../styles/InterestCard.module.css';

interface InterestCardProps {
    interest: string;
    color: string;
    step: number;
    totalSteps: number;
}

export default function InterestCard({ interest, color, step, totalSteps }: InterestCardProps) {
    const gradient = `linear-gradient(to right, ${color} calc(100% / ${totalSteps} * ${step}), ${color} calc(100% / ${totalSteps} * ${step}))`;
    return (
        <li style={{ '--i': step, '--length': totalSteps, '--color': color, '--gradient': gradient } as React.CSSProperties} className={styles.card}>
          <h3 className={styles.title}>{interest}</h3>
        </li>
    );
}
