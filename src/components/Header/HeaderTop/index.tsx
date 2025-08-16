import styles from './styles.module.scss';
import CreditCard from '../../../assets/icons/CreditCard.png';
import ShieldCheck from '../../../assets/icons/ShieldCheck.png';
import Truck from '../../../assets/icons/Truck.png';

export function HeaderTop() {
  return (
    <div className={styles.topContainer}>
      <div>
        <img src={ShieldCheck} alt="Icone escudo de segurança" />
        <p>
          Compra <span className={styles.highlight}>100% segura</span>
        </p>
      </div>
      <div>
        <img src={Truck} alt="Icone caminhão entregas" />
        <p>
          <span className={styles.highlight}>Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div>
        <img src={CreditCard} alt="Icone cartão de crédito" />
        <p>
          <span className={styles.highlight}>Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
}