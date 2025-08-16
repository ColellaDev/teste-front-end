import styles from './styles.module.scss';
import { useState } from 'react';
import { Icon } from '../../ui/icons/Icon';

const categoriesItems = [
    { text: "Tecnologia", icon: 'tecnology'},
    { text: "Supermercado", icon: 'supermarket'},
    { text: "Bebidas", icon: 'drinks'},
    { text: "Ferramentas", icon: 'tools'},
    { text: "Saúde", icon: 'health'},
    { text: "Esportes e Fitness", icon: 'fitness'},
    { text: "Moda", icon: 'fashion'}
]

export function Categories() {
    const [selectedItem, setSelectedItem] = useState('Tecnologia');

    return (
        <section className={styles.categoriesContainer}>
                <div className={styles.categoriesGroup}>
                {categoriesItems.map((item) => (
                     <div 
                      key={item.text} 
                      className={`${styles.categories} ${selectedItem === item.text ? styles.selected : ''}`}
                      onClick={() => setSelectedItem(item.text)}
                     >
                        <div className={styles.iconDiv}>
                            {item.icon && (<Icon name={item.icon} width={70} height={69}/>)}
                        </div>
                        {item.text}
                    </div>
                ))}
                </div>
        </section>
    )
}