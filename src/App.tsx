import styles from './styles/global.module.scss';
import rocket from './assets/rocket.png';

export function App() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.presentation}>
        <h1 className={styles.welcome}><span>I'm</span> Daniel Duarte</h1>
        <img src={rocket} />
      </div>
    </main>
  )
}