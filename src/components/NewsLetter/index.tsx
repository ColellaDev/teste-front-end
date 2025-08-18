import styles from './styles.module.scss'
import { Button } from '../Button'

export function NewsLetter() {
  return(
    <div className={styles.newsLetterContainer}>
      <div className={styles.newsLetterText}>
        <h5>
          Inscreva-se na nossa newsletter
        </h5>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
      </div>
      <form className={styles.newsLetterForm}>
        <input className={styles.inputForm} type="text" placeholder="Digite seu nome" />
        <input className={styles.inputForm} type="text" placeholder="Digite seu e-mail" />
        <Button text="INSCREVER" />
        <div className={styles.checkbox}>
          <input type="checkbox" name="check" id="check" />
          <label htmlFor="check">Aceito os termos e condições</label>
        </div>
      </form>
    </div>  
  )
}