import styles from './styles.module.scss'
import { TitleRelatedProduct } from './TitleRelatedProducts'
import { Slider } from '../Slider'

export function RelatedProducts() {
    return (
        <section className={styles.relatedProductsContainer}>
            <TitleRelatedProduct/>
            <p>Ver todos</p>
            <Slider/>
        </section>
    )
}