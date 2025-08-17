import styles from './styles.module.scss';
import type { ProductTypes } from '../../../types/product';

interface ProductCardProps {
    product: ProductTypes;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.productCardContainer}>
            <img src={product.photo} alt={product.productName} className={styles.imgCard} />
            <p className={styles.pStandart}>{product.productName}</p>
            <p className={styles.pStandart}>{product.descriptionShort}</p>
            <p className={styles.originalPrice}>R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <p className={styles.currentPrice}>R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <p className={styles.installmentPrice}>ou 2x de R$ {(product.price / 2).toFixed(2).replace('.', ',')} sem juros</p>
            <p className={styles.spanDeliver}>Frete grátis</p>
            <button className={styles.button}>COMPRAR</button>
         </div>
    ) 
}