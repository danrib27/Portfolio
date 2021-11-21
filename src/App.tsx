import whatsIcon from './images/whats_icon.png';
import telegramIcon from './images/telegram_icon.png';
import signalIcon from './images/signal_icon.png';
import styles from './styles/global.module.scss'

export function App() {
  return (
    <main className={ styles.content }>
      <h1>Infelizmente a página ainda está em desenvolvimento</h1>
      <h3>Tente voltar outra hora</h3>
      <div className={ styles.contact }>
        <div className={ styles.deviceContact }>
          <img src={ whatsIcon } alt="Whatsapp contact" />
          <img src={ telegramIcon } alt="Telegram contact" />
          <img className= {styles.signal_icon} src={ signalIcon } alt="Signal contact" />
          <p className={ styles.phone }>(91) 98518-8080</p>
        </div>
        <p className={ styles.email }>danielduarte.tech@protonmail.com</p>
      </div>
    </main>
  )
}