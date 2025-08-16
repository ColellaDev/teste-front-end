import { PartnerCard } from './PartnerCard';
import styles from './styles.module.scss';

export function Partners() {
    return (
        <section className={styles.partnersContainer}>
            <PartnerCard/>
            <PartnerCard/>
        </section>
    )
}