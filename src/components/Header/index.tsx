import styles from './styles.module.scss';

import { HeaderTop } from './HeaderTop';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderBottom } from './HeaderBottom';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}
