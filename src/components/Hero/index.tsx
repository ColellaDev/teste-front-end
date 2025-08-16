import { Button } from '../Button';
import styles from './styles.module.scss';

export function Hero() {
    return (
    <section className={styles.heroContainer}>
      <div>
        <h1>Venha conhecer nossas <br/> promoções</h1>
        <p><span className={styles.highlight}>50% Off</span> nos produtos</p>
       <Button text={'Ver Produtos'} className={styles.heroButton}></Button>
      </div>
    </section>
  )
}
