import styles from './styles.module.scss';

export function HeaderTop() {
  return (
    <div className={styles.topContainer}>
      <p>Compra 100% segura</p>
      <p>Frete grátis acima de R$ 200</p>
      <p>Parcele suas compras</p>
    </div>
  );
}