import { useState } from 'react';
import styles from './styles.module.scss';

import CrownSimple from "../../../assets/icons/CrownSimple.svg"
import CrownSimpleBlue from "../../../assets/icons/CrownSimpleBlue.svg"

type MenuItem = {
  text: string;
  icons?: {
    default: string;
    selected: string;
  };
};

const menuItems: MenuItem[] = [
  { text: 'TODAS CATEGORIAS' },
  { text: 'SUPERMERCADO' },
  { text: 'LIVROS' },
  { text: 'MODA' },
  { text: 'LANÇAMENTO' },
  { text: 'OFERTAS DO DIA' },
  { text: 'ASSINATURA', icons: { default: CrownSimple, selected: CrownSimpleBlue } },
];

export function HeaderBottom() {
  const [selectedItem, setSelectedItem] = useState<string>('OFERTAS DO DIA');

  return (
    <div className={styles.bottomContainer}>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.text}
            className={selectedItem === item.text ? styles.selected : ''}
            onClick={() => setSelectedItem(item.text)}
          >
            {item.icons && (
              <img
                src={selectedItem === item.text ? item.icons.selected : item.icons.default}
                className={styles.crownIcon}
                alt="Ícone de uma coroa" />
            )}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
