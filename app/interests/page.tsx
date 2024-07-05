import InterestCard from '../components/InterestCard';
import styles from '../styles/interests.module.css';

const interests = [
    { interest: "Programming", color: "#FF5733" },
    { interest: "Reading", color: "#33FF57" },
    { interest: "Gaming", color: "#3357FF" },
    { interest: "Cooking", color: "#FF33A8" },
    { interest: "Traveling", color: "#33FFD5" },
    { interest: "Music", color: "#FF8633" },
    { interest: "Movies", color: "#57FF33" },
    { interest: "Sports", color: "#FF33FF" },
    { interest: "Photography", color: "#33FFA8" },
    { interest: "Fitness", color: "#A833FF" },
    { interest: "Gardening", color: "#FF5733" },
    { interest: "Dancing", color: "#3357FF" },
];

export default function Interests() {
    return (
        <ol className={styles.list} role="list">
            {interests.map((interest, index) => (
                <InterestCard
                key={index}
                interest={interest.interest}
                color={interest.color}
                step={index + 1}
                totalSteps={interests.length}
                />
            ))}
        </ol>
    );
}
