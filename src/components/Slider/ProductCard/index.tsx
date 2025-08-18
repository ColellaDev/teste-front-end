import styles from './styles.module.scss';
import type { ProductTypes } from '../../../types/product';

interface ProductCardProps {
    product: ProductTypes;
    onClick: (product: ProductTypes) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
    return (
        <div className={styles.productCardContainer} onClick={() => onClick(product)}>
            <img src={product.photo} alt={product.productName} className={styles.imgCard} />
            <p className={styles.pStandart}>{product.productName}</p>
            <p className={styles.pStandart}>{product.descriptionShort}</p>
            <p className={styles.originalPrice}>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className={styles.currentPrice}>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className={styles.installmentPrice}>ou 2x de R$ {(product.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros</p>
            <p className={styles.spanDeliver}>Frete grátis</p>
            <button className={styles.button}>COMPRAR</button>
         </div>
    ) 
}