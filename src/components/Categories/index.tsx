import styles from './styles.module.scss';

import drinks from '../../assets/icons/drinks.svg';
import fashion from '../../assets/icons/fashion.svg'
import fitness from '../../assets/icons/fitness.svg';
import health from '../../assets/icons/health.svg';
import supermarket from '../../assets/icons/supermarket.svg';
import tecnology from '../../assets/icons/tecnology.svg';
import tools from '../../assets/icons/tools.svg';

export function Categories() {
    return (
        <section className={styles.categoriesContainer}>
            <div className={styles.categoriesGroup}>

                <div className={styles.categoriesActive}>
                    <div className={styles.iconDivActive}>
                        <img src={tecnology}  alt="Imagem de tecnologia"/>
                    </div>
                     Tecnologia
                </div>

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={supermarket}  alt="Imagem"/>
                    </div>
                     Supermercado
                </div>

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={drinks}  alt="Imagem "/>
                    </div>
                     Bebidas
                </div>  

                 <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={tools}  alt="Imagem "/>
                    </div>
                     Ferramentas
                </div>  

                 <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={health}  alt="Imagem "/>
                    </div>
                     Saúde
                </div>  

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={fitness}  alt="Imagem "/>
                    </div>
                     Esportes e Fitness
                </div>  

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={fashion}  alt="Imagem "/>
                    </div>
                     Moda
                </div>  

            </div>
        </section>
    )
}