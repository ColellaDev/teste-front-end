import styles from './styles.module.scss';
import { Button } from '../../Button';

export function PartnerCard() {
    return (
        <section className={styles.partnerCardContainer}>
            <div>
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit <br/>amet, consectetur</p>
                <Button text={'CONFIRA'} className={styles.partnerButton}></Button>
            </div> 
        </section>
    )
}