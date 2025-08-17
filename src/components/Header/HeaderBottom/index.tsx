import { useState } from 'react';
import styles from './styles.module.scss';

import CrownSimple from "../../../assets/icons/CrownSimple.svg"
import CrownSimpleBlue from "../../../assets/icons/CrownSimpleBlue.svg"

const menuItems = [
  { text: 'TODAS CATEGORIAS' },
  { text: 'SUPERMERCADO' },
  { text: 'LIVROS' },
  { text: 'MODA' },
  { text: 'LANÇAMENTO' },
  { text: 'OFERTAS DO DIA' },
  { text: 'ASSINATURA', icon: CrownSimple || CrownSimpleBlue },
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
            {item.text === 'ASSINATURA' && (
            <img
            src={selectedItem === item.text ? CrownSimpleBlue : CrownSimple}
            className={styles.crownIcon}
            alt="Ícone de uma coroa"/>)}

            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
