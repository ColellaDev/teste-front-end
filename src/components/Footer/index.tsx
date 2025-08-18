import styles from './styles.module.scss'
import Logo from '../../assets/images/Logo.png'
import Facebook from '../../assets/icons/facebook.png'
import Instagram from '../../assets/icons/instagram.png'
import Linkedin from '../../assets/icons/linkedin.png'

export function Footer() {
  return (
    <nav className={styles.footerContainer}>
      <div className={styles.footerCompany}>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="logo Econverse"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
        </div>
        <ul className={styles.socialMedia}>
          <li>
            <img src={Instagram}/>
          </li>
          <li>
           <img src={Facebook}/>
          </li>
          <li>
            <img src={Linkedin}/>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <h3>Institucional</h3>
          <li>Sobre Nós</li>
          <li>Movimento</li>
          <li>Trabalhe conosco</li>
        </ul>

        <ul className={styles.menuItems}>
          <h3>Ajuda</h3>
          <li>Suporte</li>
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
        </ul>

        <ul className={styles.menuItems}>
          <h3>Termos</h3>
          <li>Termos e Condições</li>
          <li>Política de Privacidade</li>
          <li>Troca e Devolução</li>
        </ul>
      </div>
    </nav>
  )
}