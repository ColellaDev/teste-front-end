import { TitleRelatedProduct } from '../RelatedProducts/TitleRelatedProducts'
import { Slider } from '../Slider'
import { NavCategories } from './NavCategories'
import styles from './styles.module.scss'

export function ProductNav() {
    return (
        <section className={styles.productNavContainer}>
            <TitleRelatedProduct/>
            <NavCategories/>
            <Slider/>
        </section>
    )
}