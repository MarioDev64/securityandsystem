import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/SentSuccessfully.module.css';

export default function SentSuccessfully() {
    return (
        <div className={styles.container}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            </div>
        </div>
    );
}
