import constructImg from './images/under_construct.png';
import whatsIcon from './images/whats_icon.png';
import telegramIcon from './images/telegram_icon.png';
import signalIcon from './images/signal_icon.png';
import styles from './styles/global.module.scss';

export function App() {
  return (
    <div className={ styles.main }>
      <main className={ styles.content }>
        <p className={ styles.message }>This page is under construct</p>
        <p className={ styles.subMessage }>Try to come back another time</p>
        <div className={ styles.contact }>
          <div className={ styles.deviceContact }>
            <img src={ whatsIcon } alt="Whatsapp contact" />
            <img src={ telegramIcon } alt="Telegram contact" />
            <img className= { styles.signal_icon } src={ signalIcon } alt="Signal contact" />
            <p className={ styles.phone }>(91) 98518-8080</p>
          </div>
          <p className={ styles.email }>danielduarte.tech@protonmail.com</p>
        </div>
      </main>
      <aside>
        <img className={ styles.under_construct } src={ constructImg } alt="This page is under construct" />
      </aside>
    </div>
  )
}