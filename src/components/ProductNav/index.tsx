import { TitleRelatedProduct } from '../TitleRelatedProducts'
import { NavCategories } from './NavCategories'
import styles from './styles.module.scss'

export function ProductNav() {
    return (
        <section className={styles.productNavContainer}>
            <TitleRelatedProduct/>
            <NavCategories/>
        </section>
    )
}