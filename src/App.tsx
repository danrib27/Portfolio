import styles from './styles/global.module.scss';
import rocket from './assets/rocket.png';
import { CardProjects } from './components/CardProjects';

export function App() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.presentation}>
        <h1 className={styles.welcome}><span>I'm</span> Daniel Duarte</h1>
        <img src={rocket} />
      </div>
      <div className={styles.projects}>
        <CardProjects />
      </div>
    </main>
  )
}