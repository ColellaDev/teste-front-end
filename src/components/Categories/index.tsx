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

                <div className={`${styles.categories} ${styles.categoriesActive}`}>
                    <div className={`${styles.iconDiv} ${styles.iconDivActive}`}>
                        <img src={tecnology}  alt="Imagem de tecnologia com tela e celulares"/>
                    </div>
                     Tecnologia
                </div>

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={supermarket}  alt="Imagem de um mercado"/>
                    </div>
                     Supermercado
                </div>

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={drinks}  alt="Imagem de Bebidas com garrafa e copo"/>
                    </div>
                     Bebidas
                </div>  

                 <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={tools}  alt="Imagem de ferramentas com martelo e chave de fenda"/>
                    </div>
                     Ferramentas
                </div>  

                 <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={health}  alt="Imagem de saúde, com uma mão segurando coração "/>
                    </div>
                     Saúde
                </div>  

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={fitness}  alt="Imagem de esportes e fitiness, com homem correndo na esteira "/>
                    </div>
                     Esportes e Fitness
                </div>  

                <div className={styles.categories}>
                    <div className={styles.iconDiv}>
                        <img src={fashion}  alt="Imagem de moda, com vestido e sapato"/>
                    </div>
                     Moda
                </div>  

            </div>
        </section>
    )
}