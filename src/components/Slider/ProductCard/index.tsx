import styles from './styles.module.scss';
import type { ProductTypes } from '../../../types/product';

interface ProductCardProps {
    product: ProductTypes;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCardContainer}>
            <img src={product.photo} alt={product.productName} className={styles.imgCard} />
            <h3>{product.productName}</h3>
             <p>{product.descriptionShort}</p>
            <p><strong>Preço:</strong> R$ {product.price.toFixed(2).replace('.', ',')}</p>
         </div>
    )
}