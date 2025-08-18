import type { ProductTypes } from '../../../types/product';
import styles from './styles.module.scss';

type ModalProps = {
  product: ProductTypes;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ModalProps) {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={product.photo} alt={product.productName} />
        <div className={styles.productInfo}>
          <h2>{product.productName}</h2>
          <p className={styles.price}>R$ {product.price.toFixed(2).replace('.', ',')}</p>
          <p className={styles.description}>Many desktop publishing packages and web page editors now many desktop publishing</p>
          <p className={styles.spanSeeMore}>Veja mais detalhes do produto &gt;</p>
          <button className={styles.buyButton}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}
