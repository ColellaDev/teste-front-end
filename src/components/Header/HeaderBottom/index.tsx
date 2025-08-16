import { useState } from 'react';
import { Icon } from '../../../ui/icons/Icon';
import styles from './styles.module.scss';

const menuItems = [
  { text: 'TODAS CATEGORIAS' },
  { text: 'SUPERMERCADO' },
  { text: 'LIVROS' },
  { text: 'MODA' },
  { text: 'LANÇAMENTO' },
  { text: 'OFERTAS DO DIA' },
  { text: 'ASSINATURA', icon: 'crownSimple' },
];

export function HeaderBottom() {
  const [selectedItem, setSelectedItem] = useState('OFERTAS DO DIA');

  return (
    <div className={styles.bottomContainer}>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.text}
            className={selectedItem === item.text ? styles.selected : ''}
            onClick={() => setSelectedItem(item.text)}
          >
            {item.icon && (
              <Icon name={item.icon} width={18} height={18} className={styles.icon} />
            )}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
