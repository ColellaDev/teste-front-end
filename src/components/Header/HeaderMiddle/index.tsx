import styles from './styles.module.scss';

import Logo from '../../../assets/images/Logo.png';
import Search from '../../../assets/icons/Search.png';
import { Icon } from '../../../ui/icons/Icon';

export function HeaderMiddle() {
  return (
    <div className={styles.middleContainer}>
      <img src={Logo} alt="Logo" />
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="O que você está buscando?" />
        <img src={Search} alt="Ícone de busca" />
      </div>
      <div className={styles.iconsWrapper}>
        <Icon name="box" width={28} height={28}/>
        <Icon name="heart" width={28} height={28}/>
        <Icon name="userCircle"/>
        <Icon name="shoppingCart"/>
      </div>
    </div>
  );
}
