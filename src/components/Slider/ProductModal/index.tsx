import { useState } from 'react';
import type { ProductTypes } from '../../../types/product';
import styles from './styles.module.scss';

type ModalProps = {
  product: ProductTypes;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={product.photo} alt={product.productName} />
        <div className={styles.productInfo}>
          <h2>{product.productName}</h2>
          <p className={styles.price}>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className={styles.description}>Many desktop publishing packages and web page editors now many desktop publishing</p>
          <p className={styles.spanSeeMore}>Veja mais detalhes do produto &gt;</p>
          <div className={styles.sellContainer}>
            <div className={styles.quantitySelector}>
                <button onClick={handleDecreaseQuantity} className={styles.quantityButton}>-</button>
                <span className={styles.quantityDisplay}>{quantity.toString().padStart(2, '0')}</span>
                <button onClick={handleIncreaseQuantity} className={styles.quantityButton}>+</button>
            </div>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
