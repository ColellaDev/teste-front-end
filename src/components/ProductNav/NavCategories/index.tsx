import { useState } from 'react';
import styles from './styles.module.scss';

type MenuItem = {
  text: string;
};

const menuItems: MenuItem[] = [
  { text: 'CELULAR' },
  { text: 'ACESSÓRIOS' },
  { text: 'TABLETS' },
  { text: 'NOTEBOOKS' },
  { text: 'TVS' },
  { text: 'VER TODOS' },
];

export function NavCategories() {
  const [selectedItem, setSelectedItem] = useState<string>('CELULAR');

  return (
    <ul className={styles.navContainer}>
      {menuItems.map(item => (
        <li
          key={item.text}
          className={`${styles.menuItem} ${selectedItem === item.text ? styles.selected : ''}`}
          onClick={() => setSelectedItem(item.text)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}