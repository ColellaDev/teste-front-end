import styles from './styles.module.scss';

import Logo from '../../../assets/images/Logo.png';
import Search from '../../../assets/icons/Search.png';

import Group from '../../../assets/icons/Group.svg'
import Heart from '../../../assets/icons/Heart.svg'
import UserCircle from '../../../assets/icons/UserCircle.svg'
import ShoppingCart from '../../../assets/icons/ShoppingCart.svg'

export function HeaderMiddle() {
  return (
    <div className={styles.middleContainer}>
      <img src={Logo} alt="Logo" />
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="O que você está buscando?" />
        <img src={Search} alt="Ícone de busca" />
      </div>
      <div className={styles.iconsWrapper}>
        <img src={Group} alt="Ícone de grupo"/>
        <img src={Heart} alt="Ícone de grupo"/>
        <img src={UserCircle} alt="Ícone de grupo"/>
        <img src={ShoppingCart} alt="Ícone de grupo"/>
      </div>
    </div>
  );
}
